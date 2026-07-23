console.log("JavaScript is successfully linked!");

let rawExcelData = [];
let normalizedProducts = [];
let orderBasket = {}; // Stores item codes and quantities




document.addEventListener("DOMContentLoaded", function () {
    loadCatalogData();

    const categoryFilter = document.getElementById("categoryFilter");
    const searchInput = document.getElementById("searchInput");

    if (categoryFilter) {
        categoryFilter.addEventListener("change", renderCatalog);
    }
    if (searchInput) {
        searchInput.addEventListener("input", renderCatalog);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // 1. Disable Right-Click context menu on all images
    document.addEventListener("contextmenu", function (e) {
        if (e.target.tagName === "IMG") {
            e.preventDefault();
        }
    }, false);

    // 2. Disable Image Drag-and-Drop saving
    document.addEventListener("dragstart", function (e) {
        if (e.target.tagName === "IMG") {
            e.preventDefault();
        }
    }, false);
});

async function loadCatalogData() {
    try {
        const response = await fetch('./products.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        rawExcelData = await response.json();

        // Build clean internal product data array
        buildNormalizedArray(rawExcelData);

        // Dynamic category setup
        populateCategories();

        // Render catalog DOM cards
        renderCatalog();

        syncQuantities();
    } catch (error) {
        console.error('Failed to load JSON data:', error);
    }
}

function buildNormalizedArray(data) {
    if (!Array.isArray(data)) return;

    normalizedProducts = data.map(item => {
        const code = item['Item Code'] || item.code || item.id || '';
        
        return {
            code: code,
            name: item['Item Name'] || item.name || item.title || 'Unnamed Item',
            category: item['Category'] || item.category || 'Uncategorized',
            // Ignores Drive URLs and constructs local path based on Item Code
            image: `images/${code}.png`, 
            initialQty: item.initialQty || 0
        };
    }).filter(item => item.code !== ''); // Keep valid items only
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

    let htmlString = '';
    let matchCount = 0;

    normalizedProducts.forEach(item => {
        const itemNameLower = item.name.toLowerCase();
        const itemCodeLower = item.code.toLowerCase();
        const itemCategoryLower = item.category.toLowerCase();

        const matchesCategory = (selectedCategory === 'all' || item.category === selectedCategory);
        const matchesSearch = (
            itemNameLower.includes(searchTerm) ||
            itemCodeLower.includes(searchTerm) ||
            itemCategoryLower.includes(searchTerm)
        );

        if (matchesCategory && matchesSearch) {
            matchCount++;
            const qty = orderBasket[item.code] !== undefined ? orderBasket[item.code] : item.initialQty;

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
                    </div>
                </div>
            `;
        }
    });

    grid.innerHTML = htmlString || '<p class="no-results">No products found.</p>';
    updateOrderBar();
}

function adjustQty(itemCode, delta) {
    const currentQty = orderBasket[itemCode] || 0;
    const newQty = Math.max(0, currentQty + delta);
    updateQuantity(itemCode, newQty);
    
    // Update card input UI directly
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

// Function called by your HTML button's onclick="generatePDF()"
// Helper function to load an image URL into a Base64 string/HTMLImageElement
function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null); // Fallback if image fails to load
        img.src = url;
    });
}

async function generatePDF() {
    const basketKeys = Object.keys(orderBasket);

    if (basketKeys.length === 0) {
        alert("Your order is empty. Please select quantity for at least one item.");
        return;
    }

    const selectedItems = basketKeys.map(code => {
        const product = normalizedProducts.find(p => p.code === code) || {};
        return {
            code: code,
            name: product.name || 'Unknown Item',
            category: product.category || 'Uncategorized',
            image: product.image || `images/${code}.png`,
            qty: orderBasket[code]
        };
    });

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // --- COMPANY BRANDING HEADER ---
    
    // 1. Add Logo
    const logoImg = await loadImage('images/SMT_LOGO-1.png');
    if (logoImg) {
        try {
            doc.addImage(logoImg, 'PNG', 14, 12, 22, 22); // Logo x=14, y=12, width=22, height=22
        } catch (e) {
            console.error("Logo failed to render:", e);
        }
    }

    // 2. Company Name "SAMRAT"
    doc.setFont("Colonna MT", "normal");
    doc.setFontSize(26);
    doc.setTextColor(10, 80, 160); // Blue color (#0A50A0)
    doc.text("SAMRAT", 40, 22);

    // 3. Subheading "Machine & Tools LLC."
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Machine & Tools LLC.", 40, 28);

    // 4. Header Divider Line
    doc.setDrawColor(200);
    doc.setLineWidth(0.5);
    doc.line(14, 37, 195, 37);

    // --- ORDER DETAILS ---
    
    let yPosition = 45;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text("PURCHASE ORDER", 14, yPosition);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, yPosition);

    // Table Headers
    yPosition += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(0);

    doc.text("Image", 14, yPosition);
    doc.text("Item Code", 40, yPosition);
    doc.text("Item / Category", 75, yPosition);
    doc.text("Qty", 180, yPosition);

    doc.line(14, yPosition + 2, 195, yPosition + 2);

    yPosition += 8;

    const rowHeight = 20;  
    const maxBoxSize = 14; 
    let totalQuantity = 0;

    for (const item of selectedItems) {
        if (yPosition + rowHeight > 270) {
            doc.addPage();
            yPosition = 20;
        }

        // Thumbnail Drawing
        const imgElement = await loadImage(item.image);
        if (imgElement && imgElement.width > 0 && imgElement.height > 0) {
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
            } catch (e) {
                // Handle unsupported format quietly
            }
        }

        // Item Text Rows
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

        totalQuantity += item.qty;
        yPosition += rowHeight;
    }

    // Summary Footer
    doc.line(14, yPosition, 195, yPosition);
    yPosition += 8;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`Total Quantities Ordered: ${totalQuantity}`, 14, yPosition);

    doc.save(`SAMRAT_Order_${Date.now()}.pdf`);
}



