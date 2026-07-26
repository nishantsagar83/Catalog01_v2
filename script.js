// --- CONFIGURATION ---
const API_BASE_URL = "https://smt-products-api.smtdxb.workers.dev";
const WORKER_IMAGE_BASE = "https://smt-products-api.smtdxb.workers.dev";
const COMPANY_WHATSAPP_NUMBER = "971542243526"; 

// --- GLOBAL STATE ---
let rawExcelData = [];
let normalizedProducts = [];
let orderBasket = {}; // Stores item codes and quantities: { "CODE": qty }
let currentUser = null;

// --- PAGINATION STATE ---
let currentPage = 1;
const itemsPerPage = 24;

// Fallback users for local testing
let systemUsers = [
    { id: "USR-101", name: "John Doe", role: "Sales", password: "password123" },
    { id: "USR-102", name: "Jane Smith", role: "Manager", password: "adminpassword" }
];

// --- INITIALIZATION ON DOM READY ---
document.addEventListener("DOMContentLoaded", async function () {
    // 1. Session check on page refresh
    const savedUser = sessionStorage.getItem("loggedInUser");
    const modal = document.getElementById("loginModal");
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        if (modal) modal.style.display = "none";
        
        const userName = currentUser["User Name"] || currentUser.name || currentUser.username;
        const userId = currentUser["User Id"] || currentUser.id || currentUser.user_id;
        
        const userDisplay = document.getElementById("loggedInUserDisplay");
        if (userDisplay) userDisplay.innerText = `${userName} (${userId})`;
        
        const userInfo = document.getElementById("userInfo");
        if (userInfo) userInfo.style.display = "inline-flex";

        await loadCatalogData();
    } else {
        if (modal) modal.style.display = "block";
    }

    // 2. Fetch authenticated users live from Cloudflare D1
    try {
        const response = await fetch(`${API_BASE_URL}/api/users`);
        if (response.ok) {
            const fetchedUsers = await response.json();
            if (Array.isArray(fetchedUsers) && fetchedUsers.length > 0) {
                systemUsers = fetchedUsers;
            }
        }
    } catch (err) {
        console.warn("Failed to load users from D1. Using fallback local users array.");
    }

    // 3. Attach login submit handler
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    // 4. Load catalog data from API
    await loadCatalogData();

    // 5. Attach filter & search listeners (resets pagination to Page 1)
    const categoryFilter = document.getElementById("categoryFilter");
    const searchInput = document.getElementById("searchInput");

    if (categoryFilter) {
        categoryFilter.addEventListener("change", () => {
            currentPage = 1;
            renderCatalog();
        });
    }
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            currentPage = 1;
            renderCatalog();
        });
    }

    // 6. Attach Product Add/Edit Form submission handler
    const productForm = document.getElementById("productForm");
    if (productForm) {
        productForm.addEventListener("submit", handleProductFormSubmit);
    }

    // 7. Disable Right-Click and Drag-and-Drop on images
    document.addEventListener("contextmenu", function (e) {
        if (e.target.tagName === "IMG") e.preventDefault();
    }, false);

    document.addEventListener("dragstart", function (e) {
        if (e.target.tagName === "IMG") e.preventDefault();
    }, false);
});

// --- CATALOG DATA LOADING & PROCESSING ---
async function loadCatalogData() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        rawExcelData = await response.json();
        buildNormalizedArray(rawExcelData);
        await populateCategories();
        renderCatalog();
        syncQuantities();
    } catch (error) {
        console.warn('Failed to load D1 data, falling back to local products.json:', error);
        try {
            const fallbackResponse = await fetch('./products.json');
            if (fallbackResponse.ok) {
                rawExcelData = await fallbackResponse.json();
                buildNormalizedArray(rawExcelData);
                await populateCategories();
                renderCatalog();
                syncQuantities();
            }
        } catch (fallbackError) {
            console.error('Critical: Failed to load fallback JSON data.', fallbackError);
        }
    }
}

function buildNormalizedArray(data) {
    if (!Array.isArray(data)) return;

    normalizedProducts = data.map(item => {
        const code = item['Item Code'] || item.code || item.id || '';
        let rawImg = item['Product Image'] || item.image || `${code}.png`;

        let imageUrl = rawImg;

        if (!rawImg.startsWith("http://") && !rawImg.startsWith("https://")) {
            const cleanFileName = rawImg.replace(/^(\.\/)?images\//, "");
            const encodedFileName = encodeURIComponent(cleanFileName);
            imageUrl = `${WORKER_IMAGE_BASE}/${encodedFileName}?v=${Date.now()}`;
        } else {
            imageUrl = rawImg.replace(/ /g, "%20");
        }

        return {
            code: code,
            name: item['Item Name'] || item.name || item.title || 'Unnamed Item',
            category: item['Category'] || item.category || 'Uncategorized',
            image: imageUrl, 
            initialQty: item.initialQty || 0
        };
    }).filter(item => item.code !== '');
}

async function populateCategories() {
    const filterSelect = document.getElementById('categoryFilter');
    const modalCatSelect = document.getElementById('modalCategorySelect');

    let sortedCategories = [];

    try {
        const response = await fetch(`${API_BASE_URL}/api/categories`);
        if (response.ok) {
            const categoriesData = await response.json();
            sortedCategories = categoriesData.map(c => c.name).filter(cat => cat && cat.trim() !== '').sort();
        }
    } catch (err) {
        const categoriesSet = new Set(
            (typeof normalizedProducts !== 'undefined' ? normalizedProducts : [])
                .map(p => p.category)
                .filter(cat => cat && cat.trim() !== '')
        );
        sortedCategories = Array.from(categoriesSet).sort();
    }

    if (filterSelect) {
        let html = '<option value="all">All Categories</option>';
        sortedCategories.forEach(cat => {
            html += `<option value="${cat}">${cat}</option>`;
        });
        filterSelect.innerHTML = html;
    }

    if (modalCatSelect) {
        let modalHtml = '<option value="" disabled selected>-- Select Category --</option>';
        sortedCategories.forEach(cat => {
            modalHtml += `<option value="${cat}">${cat}</option>`;
        });
        modalHtml += '<option value="__NEW__">+ Add New Category...</option>';
        modalCatSelect.innerHTML = modalHtml;
    }
}

// --- ROLE HELPER ---
function isManager() {
    if (!currentUser) return false;
    const role = currentUser["Role"] || currentUser.role || "";
    return role.toString().trim().toLowerCase() === "manager";
}

// --- RENDER CATALOG WITH PAGINATION ---
function renderCatalog() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const categoryElem = document.getElementById('categoryFilter');
    const searchElem = document.getElementById('searchInput');

    const selectedCategory = categoryElem ? categoryElem.value : 'all';
    const searchTerm = searchElem ? searchElem.value.toLowerCase().trim() : '';

    const userIsManager = isManager();

    const addBtn = document.querySelector('.btn-add');
    if (addBtn) {
        addBtn.style.display = userIsManager ? 'inline-block' : 'none';
    }

    const filteredProducts = normalizedProducts.filter(item => {
        const itemNameLower = (item.name || '').toLowerCase();
        const itemCodeLower = (item.code || '').toLowerCase();
        const itemCategoryLower = (item.category || '').toLowerCase();

        const matchesCategory = (selectedCategory === 'all' || item.category === selectedCategory);
        const matchesSearch = (
            itemNameLower.includes(searchTerm) ||
            itemCodeLower.includes(searchTerm) ||
            itemCategoryLower.includes(searchTerm)
        );

        return matchesCategory && matchesSearch;
    });

    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredProducts.slice(startIndex, endIndex);

    let htmlString = '';

    if (paginatedItems.length > 0) {
        paginatedItems.forEach(item => {
            const qty = orderBasket[item.code] !== undefined ? orderBasket[item.code] : (item.initialQty || 0);

            htmlString += `
                <div class="product-card" data-code="${item.code}">
                    <div class="image-container">
                        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='images/placeholder.png';" loading="lazy" />
                    </div>
                    <div class="card-content">
                        <span class="category-badge">${item.category}</span>
                        <h3 class="item-name">${item.name}</h3>
                        <div class="card-footer">
                            <span class="item-code">${item.code}</span>
                            <div class="qty-controls">
                                <button type="button" class="qty-btn" onclick="adjustQty('${item.code}', -1)">-</button>
                                <input type="number" class="qty-input" min="0" value="${qty}" onchange="updateQuantity('${item.code}', this.value)" />
                                <button type="button" class="qty-btn" onclick="adjustQty('${item.code}', 1)">+</button>
                            </div>
                        </div>

                        ${userIsManager ? `
                            <div class="admin-actions" style="margin-top: 10px; display: flex; gap: 8px;">
                                <button type="button" class="btn-edit" onclick="openEditModal('${item.code}')" style="background:#0a50a0; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; flex:1;">Edit</button>
                                <button type="button" class="btn-delete" onclick="handleDeleteProduct('${item.code}')" style="background:#d9534f; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; flex:1;">Delete</button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });
    } else {
        htmlString = '<p class="no-results">No products found.</p>';
    }

    grid.innerHTML = htmlString;
    renderPaginationControls(totalPages, totalItems);
    updateOrderBar();
}

// --- PAGINATION CONTROLS RENDERER ---
function renderPaginationControls(totalPages, totalItems) {
    let container = document.getElementById('paginationControls');
    
    if (!container) {
        container = document.createElement('div');
        container.id = 'paginationControls';
        container.style.cssText = 'display: flex; justify-content: center; align-items: center; gap: 8px; margin: 25px 0 40px 0; flex-wrap: wrap;';
        const gridContainer = document.getElementById('productGrid');
        if (gridContainer && gridContainer.parentNode) {
            gridContainer.parentNode.insertBefore(container, gridContainer.nextSibling);
        }
    }

    if (totalItems === 0 || totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let navHtml = `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} style="padding: 6px 12px; cursor: pointer; border-radius: 4px; border: 1px solid #ccc; background: #f8f9fa;">&laquo; Prev</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            const activeStyle = (i === currentPage) 
                ? 'background: #0a50a0; color: #fff; font-weight: bold; border-color: #0a50a0;' 
                : 'background: #fff; color: #333; border: 1px solid #ccc;';
            navHtml += `<button onclick="goToPage(${i})" style="padding: 6px 12px; cursor: pointer; border-radius: 4px; ${activeStyle}">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            navHtml += `<span style="padding: 0 4px;">...</span>`;
        }
    }

    navHtml += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} style="padding: 6px 12px; cursor: pointer; border-radius: 4px; border: 1px solid #ccc; background: #f8f9fa;">Next &raquo;</button>
        <span style="margin-left: 10px; font-size: 14px; color: #555;">Page ${currentPage} of ${totalPages} (${totalItems} items)</span>
    `;

    container.innerHTML = navHtml;
}

function changePage(newPage) {
    currentPage = newPage;
    renderCatalog();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPage(page) {
    currentPage = page;
    renderCatalog();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- BASKET & QUANTITY CONTROLS ---
function adjustQty(itemCode, delta) {
    const currentQty = orderBasket[itemCode] || 0;
    const newQty = Math.max(0, currentQty + delta);
    updateQuantity(itemCode, newQty);
    
    const card = document.querySelector(`[data-code="${itemCode}"]`);
    if (card) {
        const input = card.querySelector('.qty-input');
        if (input) input.value = newQty;
    }
}

function updateQuantity(itemCode, qty) {
    const numericQty = parseInt(qty, 10) || 0;
    if (numericQty > 0) {
        orderBasket[itemCode] = numericQty;
    } else {
        delete orderBasket[itemCode];
    }
    updateOrderBar();
}

function updateOrderBar() {
    const orderBar = document.getElementById('orderBar');
    const countDisplay = document.getElementById('totalSelectedCount');

    let totalItems = 0;
    for (let code in orderBasket) {
        totalItems += orderBasket[code];
    }

    if (countDisplay) countDisplay.textContent = totalItems;

    if (totalItems > 0) {
        if (orderBar) orderBar.classList.add('active');
    } else {
        if (orderBar) orderBar.classList.remove('active');
    }
}

function syncQuantities() {
    for (let code in orderBasket) {
        const card = document.querySelector(`[data-code="${code}"]`);
        if (card) {
            const qtyInput = card.querySelector('.qty-input');
            if (qtyInput) qtyInput.value = orderBasket[code];
        }
    }
}

function clearBasket() {
    orderBasket = {};
    const qtyInputs = document.querySelectorAll('.qty-input');
    qtyInputs.forEach(input => { input.value = 0; });
    updateOrderBar();
}

// --- AUTHENTICATION & SESSION ---
function handleLogin(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const usernameInput = document.getElementById("usernameInput").value.trim().toLowerCase();
    const passwordInput = document.getElementById("passwordInput").value.trim();
    const loginError = document.getElementById("loginError");

    if (!systemUsers || systemUsers.length === 0) {
        if (loginError) {
            loginError.innerText = "System users still loading, please try again.";
            loginError.style.display = "block";
        }
        return false;
    }

    const matchedUser = systemUsers.find(u => {
        const dbName = String(u.username || u.name || u["User Name"] || u.user_name || u.id || "").trim().toLowerCase();
        const dbPass = String(u.password || u["Password"] || u.pass || "").trim();
        return dbName === usernameInput && dbPass === passwordInput;
    });

    if (matchedUser) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
        currentUser = matchedUser;

        const modal = document.getElementById("loginModal");
        if (modal) modal.style.display = "none";

        const userName = matchedUser["User Name"] || matchedUser.name || matchedUser.username;
        const userId = matchedUser["User Id"] || matchedUser.id || matchedUser.user_id || 'User';

        const userDisplay = document.getElementById("loggedInUserDisplay");
        if (userDisplay) userDisplay.innerText = `${userName} (${userId})`;

        const userInfo = document.getElementById("userInfo");
        if (userInfo) userInfo.style.display = "inline-flex";

        renderCatalog();
    } else {
        if (loginError) {
            loginError.innerText = "Invalid Username or Password";
            loginError.style.display = "block";
        }
    }

    return false;
}

function handleLogout() {
    currentUser = null;
    sessionStorage.removeItem("loggedInUser");

    const userInfo = document.getElementById("userInfo");
    if (userInfo) userInfo.style.display = "none";

    const loginForm = document.getElementById("loginForm");
    if (loginForm) loginForm.reset();

    const loginError = document.getElementById("loginError");
    if (loginError) loginError.style.display = "none";

    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "block";

    renderCatalog();
}

// --- PDF & WHATSAPP GENERATION ---
function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = url;
    });
}

async function generatePDF() {
    if (!currentUser) {
        alert("Please log in before generating an order PDF.");
        return;
    }

    const customerNameInput = document.getElementById("customerNameInput");
    const customerName = customerNameInput ? customerNameInput.value.trim() : "";

    if (!customerName) {
        alert("Please enter the Customer Name before generating the PDF.");
        if (customerNameInput) customerNameInput.focus();
        return;
    }

    const selectedItems = [];
    let totalQuantity = 0;

    for (const code in orderBasket) {
        const qty = orderBasket[code];
        if (qty > 0) {
            const product = normalizedProducts.find(p => p.code === code);
            if (product) {
                selectedItems.push({
                    code: product.code,
                    name: product.name,
                    category: product.category,
                    image: product.image,
                    qty: qty
                });
                totalQuantity += qty;
            }
        }
    }

    if (selectedItems.length === 0) {
        alert("Your order basket is empty. Please select at least one item.");
        return;
    }

    const repName = currentUser["User Name"] || currentUser.name || "Sales Rep";
    const repId = currentUser["User Id"] || currentUser.id || "N/A";
    const repRole = currentUser["Role"] || currentUser.role || "Sales";

    const timestamp = Date.now();
    const orderId = `ORD-${timestamp}`;
    const isoDate = new Date().toISOString();
    const formattedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const orderData = {
        orderId: orderId,
        orderDate: isoDate,
        salesRep: { id: repId, name: repName, role: repRole },
        customerName: customerName,
        items: selectedItems.map(item => ({
            code: item.code,
            name: item.name,
            category: item.category,
            quantity: item.qty
        })),
        totalQuantity: totalQuantity
    };

    saveOrderToHistory(orderData);

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let yPosition = 15;

    const logoImg = await loadImage("images/SMT_LOGO-1.png");
    if (logoImg && logoImg.width > 0) {
        try {
            const logoHeight = 18;
            const logoWidth = (logoImg.width / logoImg.height) * logoHeight;
            doc.addImage(logoImg, 'PNG', 14, 12, logoWidth, logoHeight);
            
            doc.setFont("helvetica", "bold");
            doc.setFontSize(22);
            doc.setTextColor(10, 80, 160);
            doc.text("SAMRAT", 14 + logoWidth + 6, 22);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(80);
            doc.text("Machine & Tools LLC.", 14 + logoWidth + 6, 28);
        } catch (e) {
            console.warn("Logo rendering skipped:", e);
        }
    } else {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.setTextColor(10, 80, 160);
        doc.text("SAMRAT Machine & Tools LLC.", 14, 22);
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("PURCHASE ORDER", 195, 22, { align: "right" });

    yPosition = 38;
    doc.setDrawColor(200);
    doc.line(14, yPosition, 195, yPosition);
    yPosition += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Order ID: ${orderId}`, 14, yPosition); yPosition += 6;
    doc.text(`Date: ${formattedDate}`, 14, yPosition); yPosition += 6;
    doc.text(`Customer Name: ${customerName}`, 14, yPosition); yPosition += 6;
    doc.text(`Sales Representative: ${repName} (ID: ${repId})`, 14, yPosition); yPosition += 8;

    doc.line(14, yPosition, 195, yPosition);
    yPosition += 8;

    doc.setFont("helvetica", "bold");
    doc.text("Image", 14, yPosition);
    doc.text("Item Code", 40, yPosition);
    doc.text("Item / Category", 75, yPosition);
    doc.text("Qty", 180, yPosition);

    doc.line(14, yPosition + 2, 195, yPosition + 2);
    yPosition += 8;

    const rowHeight = 20;  
    const maxBoxSize = 14; 

    for (const item of selectedItems) {
        if (yPosition + rowHeight > 270) {
            doc.addPage();
            yPosition = 20;
        }

        const imgElement = await loadImage(item.image);
        if (imgElement && imgElement.width > 0) {
            try {
                let imgWidth = maxBoxSize;
                let imgHeight = maxBoxSize;
                const ratio = imgElement.width / imgElement.height;
                if (ratio > 1) {
                    imgHeight = maxBoxSize / ratio;
                } else {
                    imgWidth = maxBoxSize * ratio;
                }

                const xOffset = 14 + (maxBoxSize - imgWidth) / 2;
                const yOffset = yPosition + (maxBoxSize - imgHeight) / 2;
                doc.addImage(imgElement, 'PNG', xOffset, yOffset, imgWidth, imgHeight);
            } catch (e) {}
        }

        const truncatedName = item.name.length > 40 ? item.name.substring(0, 37) + '...' : item.name;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(0);
        doc.text(String(item.code), 40, yPosition + 7);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.text(truncatedName, 75, yPosition + 6);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(110);
        doc.text(String(item.category), 75, yPosition + 11);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(0);
        doc.text(String(item.qty), 180, yPosition + 8);

        yPosition += rowHeight;
    }

    doc.line(14, yPosition, 195, yPosition);
    yPosition += 8;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`Total Quantities Ordered: ${totalQuantity}`, 14, yPosition);

    const filename = `Order_${customerName.replace(/[^a-z0-9]/gi, '_')}_${timestamp}.pdf`;
    doc.save(filename);

    sendOrderToWhatsApp(orderData);

    if (customerNameInput) customerNameInput.value = "";
    clearBasket();
}

function saveOrderToHistory(order) {
    const history = JSON.parse(localStorage.getItem("smt_order_history") || "[]");
    history.push(order);
    localStorage.setItem("smt_order_history", JSON.stringify(history, null, 2));
}

function sendOrderToWhatsApp(order) {
    let message = `🛒 *NEW PURCHASE ORDER*\n`;
    message += `-------------------------\n`;
    message += `📋 *Order ID:* ${order.orderId}\n`;
    message += `👤 *Customer:* ${order.customerName}\n`;
    message += `👨‍💼 *Sales Rep:* ${order.salesRep.name} (${order.salesRep.id})\n`;
    message += `📅 *Date:* ${new Date(order.orderDate).toLocaleDateString()}\n`;
    message += `-------------------------\n`;
    message += `📦 *ITEMS ORDERED:*\n`;

    order.items.forEach((item, idx) => {
        message += `${idx + 1}. *${item.code}* - ${item.name}\n`;
        message += `   Category: ${item.category} | *Qty: ${item.quantity}*\n`;
    });

    message += `-------------------------\n`;
    message += `📊 *Total Quantity:* ${order.totalQuantity}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
}

// --- MODAL INTERACTION CONTROLS ---
function toggleNewCategoryInput(selectElem) {
    const newCategoryInput = document.getElementById("modalNewCategory");
    if (!newCategoryInput) return;

    if (selectElem.value === "__NEW__") {
        newCategoryInput.style.display = "block";
        newCategoryInput.required = true;
        newCategoryInput.focus();
    } else {
        newCategoryInput.style.display = "none";
        newCategoryInput.required = false;
    }
}

function handleImageFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const imageUrl = e.target.result;
        document.getElementById("modalImage").value = imageUrl;
        updateImagePreview(imageUrl);
    };
    reader.readAsDataURL(file);
}

function updateImagePreview(url) {
    const previewImg = document.getElementById("modalImagePreview");
    if (previewImg) {
        previewImg.src = url || 'images/placeholder.png';
    }
}

// --- MODAL HANDLERS WITH MANAGER GUARDS ---
function openAddModal() {
    if (!isManager()) {
        alert("Access denied: Only Managers can add products.");
        return;
    }

    populateCategories();
    
    document.getElementById("productModalTitle").innerText = "Add New Product";
    document.getElementById("modalMode").value = "ADD";
    
    const codeInput = document.getElementById("modalCode");
    if (codeInput) {
        codeInput.value = "";
        codeInput.disabled = false;
    }
    
    const nameInput = document.getElementById("modalName");
    if (nameInput) nameInput.value = "";
    
    const catSelect = document.getElementById("modalCategorySelect");
    if (catSelect) catSelect.selectedIndex = 0;
    
    const newCatInput = document.getElementById("modalNewCategory");
    if (newCatInput) {
        newCatInput.value = "";
        newCatInput.style.display = "none";
        newCatInput.required = false;
    }

    const imgFileInput = document.getElementById("modalImageFile");
    if (imgFileInput) imgFileInput.value = "";

    const imgInput = document.getElementById("modalImage");
    if (imgInput) imgInput.value = "";

    updateImagePreview("images/placeholder.png");

    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "block";
}

// --- PRODUCT EDIT MODAL ---
async function openEditModal(code) {
    if (!isManager()) {
        alert("Access denied: Only Managers can edit products.");
        return;
    }

    const product = normalizedProducts.find(p => p.code === code);
    if (!product) return;

    await populateCategories();

    document.getElementById("productModalTitle").innerText = "Edit Product";
    document.getElementById("modalMode").value = "EDIT";
    
    const codeInput = document.getElementById("modalCode");
    if (codeInput) {
        codeInput.value = product.code;
        codeInput.disabled = true;
    }
    
    const nameInput = document.getElementById("modalName");
    if (nameInput) nameInput.value = product.name;

    const selectElem = document.getElementById("modalCategorySelect");
    const newCatInput = document.getElementById("modalNewCategory");
    
    if (selectElem && newCatInput) {
        let optionExists = false;
        for (let i = 0; i < selectElem.options.length; i++) {
            if (selectElem.options[i].value === product.category) {
                optionExists = true;
                break;
            }
        }

        if (optionExists) {
            selectElem.value = product.category;
            newCatInput.style.display = "none";
            newCatInput.required = false;
        } else {
            selectElem.value = "__NEW__";
            newCatInput.value = product.category;
            newCatInput.style.display = "block";
            newCatInput.required = true;
        }
    }

    const imgFileInput = document.getElementById("modalImageFile");
    if (imgFileInput) imgFileInput.value = "";

    const imgInput = document.getElementById("modalImage");
    if (imgInput) imgInput.value = product.image;

    updateImagePreview(product.image);

    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "block";
}

function closeProductModal() {
    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "none";
}

// --- PRODUCT FORM SUBMIT (ADD / EDIT) ---
async function handleProductFormSubmit(event) {
    if (event) event.preventDefault();

    const mode = document.getElementById("modalMode").value;
    const code = document.getElementById("modalCode").value.trim();
    const name = document.getElementById("modalName").value.trim();
    
    const selectElem = document.getElementById("modalCategorySelect");
    const newCatInput = document.getElementById("modalNewCategory");
    
    let category = selectElem.value;
    if (category === "__NEW__") {
        category = newCatInput.value.trim();
    }

    const image = document.getElementById("modalImage").value.trim() || "images/placeholder.png";

    if (!code || !name || !category) {
        alert("Please fill in all required fields.");
        return;
    }

    const payload = {
        code: code,
        name: name,
        category: category,
        image: image
    };

    try {
        let endpoint = `${API_BASE_URL}/api/products`;
        let method = "POST";

        if (mode === "EDIT") {
            endpoint = `${API_BASE_URL}/api/products/${encodeURIComponent(code)}`;
            method = "PUT";
        }

        const response = await fetch(endpoint, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || `Failed to save product (status: ${response.status})`);
        }

        closeProductModal();
        await loadCatalogData();
        await populateCategories();
        
        alert(mode === "EDIT" ? "Product updated successfully!" : "Product added successfully!");
    } catch (error) {
        console.error("Error saving product:", error);
        alert(`Error: ${error.message}`);
    }
}

// --- PRODUCT DELETION ---
async function handleDeleteProduct(code) {
    if (!isManager()) {
        alert("Access denied: Only Managers can delete products.");
        return;
    }

    if (!confirm(`Are you sure you want to delete product "${code}"?`)) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/products/${encodeURIComponent(code)}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || `Failed to delete product (status: ${response.status})`);
        }

        delete orderBasket[code];
        await loadCatalogData();
        await populateCategories();
        
        alert("Product deleted successfully.");
    } catch (error) {
        console.error("Error deleting product:", error);
        alert(`Error: ${error.message}`);
    }
}

// --- CATEGORY API MANAGEMENT HELPERS ---
async function addCategory(categoryName) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/categories`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: categoryName })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.error || "Failed to create category");
        }

        await populateCategories();
        return true;
    } catch (error) {
        console.error("Error adding category:", error);
        alert(`Error: ${error.message}`);
        return false;
    }
}

async function updateCategory(categoryId, oldName, newName) {
  try {
    const response = await fetch(`https://smt-products-api.smtdxb.workers.dev/api/categories/${encodeURIComponent(categoryId)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newName,
        oldName: oldName
      })
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || "Failed to update category");
    }

    console.log("Category updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Error updating category:", error);
    alert(error.message);
  }
}

async function deleteCategory(categoryName) {
    if (!confirm(`Are you sure you want to delete category "${categoryName}"? Any linked products will become uncategorized.`)) {
        return false;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/categories/${encodeURIComponent(categoryName)}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.error || "Failed to delete category");
        }

        await loadCatalogData();
        await populateCategories();
        return true;
    } catch (error) {
        console.error("Error deleting category:", error);
        alert(`Error: ${error.message}`);
        return false;
    }
}
