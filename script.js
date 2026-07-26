console.log("JavaScript is successfully linked!");

// --- CONFIGURATION ---
// Replace YOUR-SUBDOMAIN with your actual Cloudflare Workers subdomain
const API_BASE_URL = "https://smt-products-api.smtdxb.workers.dev";

// --- GLOBAL STATE (Declared ONCE at the top) ---
let rawExcelData = [];
let normalizedProducts = [];
let orderBasket = {}; // Stores item codes and quantities
let currentUser = null;

// Default fallback users so local testing works even if fetch('users.json') is blocked
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
    } else {
        if (modal) modal.style.display = "block";
    }

    // 2. Fetch authenticated users live from D1 Database
    try {
        const response = await fetch(`${API_BASE_URL}/api/users`);
        if (response.ok) {
            const fetchedUsers = await response.json();
            if (Array.isArray(fetchedUsers) && fetchedUsers.length > 0) {
                systemUsers = fetchedUsers;
                console.log("Loaded systemUsers live from D1:", systemUsers);
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

    // 4. Load catalog data from Cloudflare D1 / Worker API
    await loadCatalogData();

    // 5. Attach filter & search listeners
    const categoryFilter = document.getElementById("categoryFilter");
    const searchInput = document.getElementById("searchInput");

    if (categoryFilter) {
        categoryFilter.addEventListener("change", renderCatalog);
    }
    if (searchInput) {
        searchInput.addEventListener("input", renderCatalog);
    }

    // 6. Disable Right-Click and Drag-and-Drop on images
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
        populateCategories();
        renderCatalog();
        syncQuantities();
        console.log("Successfully loaded catalog data from Cloudflare D1.");
    } catch (error) {
        console.warn('Failed to load D1 data, falling back to local products.json:', error);
        try {
            const fallbackResponse = await fetch('./products.json');
            if (fallbackResponse.ok) {
                rawExcelData = await fallbackResponse.json();
                buildNormalizedArray(rawExcelData);
                populateCategories();
                renderCatalog();
                syncQuantities();
            }
        } catch (fallbackError) {
            console.error('Critical: Failed to load fallback JSON data as well.', fallbackError);
        }
    }
}

function buildNormalizedArray(data) {
    if (!Array.isArray(data)) return;

    normalizedProducts = data.map(item => {
        const code = item['Item Code'] || item.code || item.id || '';
        const imagePath = item['Product Image'] || item.image || `images/${code}.png`;
        return {
            code: code,
            name: item['Item Name'] || item.name || item.title || 'Unnamed Item',
            category: item['Category'] || item.category || 'Uncategorized',
            image: imagePath, 
            initialQty: item.initialQty || 0
        };
    }).filter(item => item.code !== '');
}

function populateCategories() {
    const filterSelect = document.getElementById('categoryFilter');
    if (!filterSelect) return;

    const categoriesMap = {};
    normalizedProducts.forEach(item => {
        if (item.category && item.category.trim() !== "") {
            categoriesMap[item.category] = true;
        }
    });

    let html = '<option value="all">All Categories</option>';
    for (let cat in categoriesMap) {
        if (categoriesMap.hasOwnProperty(cat)) {
            html += `<option value="${cat}">${cat}</option>`;
        }
    }
    filterSelect.innerHTML = html;
}

function renderCatalog() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const categoryElem = document.getElementById('categoryFilter');
    const searchElem = document.getElementById('searchInput');

    const selectedCategory = categoryElem ? categoryElem.value : 'all';
    const searchTerm = searchElem ? searchElem.value.toLowerCase().trim() : '';

    // Check if a user is currently logged in
    const isLoggedIn = currentUser !== null;

    let htmlString = '';

    normalizedProducts.forEach(item => {
        const itemNameLower = (item.name || '').toLowerCase();
        const itemCodeLower = (item.code || '').toLowerCase();
        const itemCategoryLower = (item.category || '').toLowerCase();

        const matchesCategory = (selectedCategory === 'all' || item.category === selectedCategory);
        const matchesSearch = (
            itemNameLower.includes(searchTerm) ||
            itemCodeLower.includes(searchTerm) ||
            itemCategoryLower.includes(searchTerm)
        );

        if (matchesCategory && matchesSearch) {
            const qty = orderBasket[item.code] !== undefined ? orderBasket[item.code] : (item.initialQty || 0);

            htmlString += `
                <div class="product-card" data-code="${item.code}">
                    <div class="image-container">
                        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='images/placeholder.png';" />
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

                        ${isLoggedIn ? `
                            <div class="admin-actions" style="margin-top: 10px; display: flex; gap: 8px;">
                                <button class="btn-edit" onclick="openEditModal('${item.code}')" style="background:#0a50a0; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer; flex:1;">Edit</button>
                                <button class="btn-delete" onclick="handleDeleteProduct('${item.code}')" style="background:#d9534f; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer; flex:1;">Delete</button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    });

    grid.innerHTML = htmlString || '<p class="no-results">No products found.</p>';
    updateOrderBar();
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
    const prompt = document.getElementById('top-action-prompt');
    const countDisplay = document.getElementById('totalSelectedCount');

    let totalItems = 0;
    for (let code in orderBasket) {
        totalItems += orderBasket[code];
    }

    if (countDisplay) countDisplay.textContent = totalItems;

    if (totalItems > 0) {
        if (orderBar) orderBar.classList.add('active');
        if (prompt) prompt.classList.add('visible');
    } else {
        if (orderBar) orderBar.classList.remove('active');
        if (prompt) prompt.classList.remove('visible');
    }
}

function syncQuantities() {
    for (let code in orderBasket) {
        const card = document.querySelector(`[data-code="${code}"]`);
        if (card) {
            const qtyInput = card.querySelector('.qty-input');
            if (qtyInput) {
                qtyInput.value = orderBasket[code];
            }
        }
    }
}

function clearBasket() {
    orderBasket = {};
    const qtyInputs = document.querySelectorAll('.qty-input');
    qtyInputs.forEach(input => {
        input.value = 0;
    });
    updateOrderBar();
}

function handleLogout() {
    currentUser = null;
    sessionStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser");

    const userInfo = document.getElementById("userInfo");
    if (userInfo) userInfo.style.display = "none";

    const loginForm = document.getElementById("loginForm");
    if (loginForm) loginForm.reset();

    const loginError = document.getElementById("loginError");
    if (loginError) loginError.style.display = "none";

    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "block";

    console.log("User logged out successfully.");
}

// --- LOGIN AUTHENTICATION ---
function handleLogin(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const usernameInput = document.getElementById("usernameInput").value.trim().toLowerCase();
    const passwordInput = document.getElementById("passwordInput").value.trim();
    const loginError = document.getElementById("loginError");

    if (!systemUsers || systemUsers.length === 0) {
        console.warn("systemUsers is empty!");
        if (loginError) {
            loginError.innerText = "System users still loading, please try again.";
            loginError.style.display = "block";
        }
        return false;
    }

    const matchedUser = systemUsers.find(u => {
        // Robust property matching across standard SQL names and Excel formats
        const dbName = String(u.username || u.name || u["User Name"] || u.user_name || u.id || "").trim().toLowerCase();
        const dbPass = String(u.password || u["Password"] || u.pass || "").trim();

        return dbName === usernameInput && dbPass === passwordInput;
    });

    if (matchedUser) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
        console.log("Login successful!", matchedUser);
        currentUser = matchedUser;

        const modal = document.getElementById("loginModal");
        if (modal) modal.style.display = "none";

        const userName = matchedUser["User Name"] || matchedUser.name || matchedUser.username;
        const userId = matchedUser["User Id"] || matchedUser.id || matchedUser.user_id || 'User';

        const userDisplay = document.getElementById("loggedInUserDisplay");
        if (userDisplay) {
            userDisplay.innerText = `${userName} (${userId})`;
        }

        const userInfo = document.getElementById("userInfo");
        if (userInfo) userInfo.style.display = "inline-flex";

    } else {
        if (loginError) {
            loginError.innerText = "Invalid Username or Password";
            loginError.style.display = "block";
        }
    }

    return false;
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

const COMPANY_WHATSAPP_NUMBER = "971542243526"; 

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

// --- CRUD API HELPER FUNCTIONS FOR WORKER ---
async function createProductAPI(productData) {
    const res = await fetch(`${API_BASE_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "Item Code": productData.code,
            "Item Name": productData.name,
            "Category": productData.category,
            "Product Image": productData.image
        })
    });
    return await res.json();
}

async function updateProductAPI(productData) {
    const res = await fetch(`${API_BASE_URL}/api/products`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "Item Code": productData.code,
            "Item Name": productData.name,
            "Category": productData.category,
            "Product Image": productData.image
        })
    });
    return await res.json();
}

async function deleteProductAPI(productCode) {
    const res = await fetch(`${API_BASE_URL}/api/products?code=${encodeURIComponent(productCode)}`, {
        method: "DELETE"
    });
    return await res.json();
}


// --- PRODUCT MODAL CONTROLS ---
function openAddModal() {
    document.getElementById("productModalTitle").innerText = "Add New Product";
    document.getElementById("modalMode").value = "ADD";
    document.getElementById("modalCode").value = "";
    document.getElementById("modalCode").disabled = false;
    document.getElementById("modalName").value = "";
    document.getElementById("modalCategory").value = "";
    document.getElementById("modalImage").value = "";
    document.getElementById("productModal").style.display = "block";
}

function openEditModal(code) {
    const product = normalizedProducts.find(p => p.code === code);
    if (!product) return;

    document.getElementById("productModalTitle").innerText = "Edit Product";
    document.getElementById("modalMode").value = "EDIT";
    document.getElementById("modalCode").value = product.code;
    document.getElementById("modalCode").disabled = true; // Code should not be modified on update
    document.getElementById("modalName").value = product.name;
    document.getElementById("modalCategory").value = product.category;
    document.getElementById("modalImage").value = product.image;
    document.getElementById("productModal").style.display = "block";
}

function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
}

// Handle Form Submission for Create & Update
document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");
    if (productForm) {
        productForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const mode = document.getElementById("modalMode").value;
            const productData = {
                code: document.getElementById("modalCode").value.trim(),
                name: document.getElementById("modalName").value.trim(),
                category: document.getElementById("modalCategory").value.trim(),
                image: document.getElementById("modalImage").value.trim()
            };

            if (mode === "ADD") {
                await createProductAPI(productData);
            } else {
                await updateProductAPI(productData);
            }

            closeProductModal();
            await loadCatalogData(); // Refresh list from D1
        });
    }
});

// Handle Delete Action
async function handleDeleteProduct(code) {
    if (confirm(`Are you sure you want to delete item "${code}"?`)) {
        await deleteProductAPI(code);
        await loadCatalogData(); // Refresh list from D1
    }
}
