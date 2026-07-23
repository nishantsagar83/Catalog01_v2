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

    // PDF Title Header
    doc.setFontSize(18);
    doc.text("PURCHASE ORDER", 14, 20);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 28);

    // Table Headers
    let yPosition = 38;
    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.setFont(undefined, 'bold');

    doc.text("Image", 14, yPosition);
    doc.text("Item Code", 40, yPosition);
    doc.text("Item / Category", 75, yPosition);
    doc.text("Qty", 180, yPosition);

    doc.setLineWidth(0.5);
    doc.line(14, yPosition + 2, 195, yPosition + 2);

    yPosition += 8;

    const rowHeight = 20;  // Allocated height per row
    const maxBoxSize = 14; // Max width/height for image box in mm
    let totalQuantity = 0;

    for (const item of selectedItems) {
        // Page overflow check
        if (yPosition + rowHeight > 270) {
            doc.addPage();
            yPosition = 20;
        }

        // 1. Draw Image with Aspect Ratio Maintenance
        const imgElement = await loadImage(item.image);
        if (imgElement && imgElement.width > 0 && imgElement.height > 0) {
            try {
                let imgWidth = maxBoxSize;
                let imgHeight = maxBoxSize;

                // Calculate aspect ratio so image does not stretch
                const ratio = imgElement.width / imgElement.height;
                if (ratio > 1) {
                    // Landscape image
                    imgHeight = maxBoxSize / ratio;
                } else {
                    // Portrait image
                    imgWidth = maxBoxSize * ratio;
                }

                // Center image inside the 14x14 box
                const xOffset = 14 + (maxBoxSize - imgWidth) / 2;
                const yOffset = yPosition + (maxBoxSize - imgHeight) / 2;

                doc.addImage(imgElement, 'PNG', xOffset, yOffset, imgWidth, imgHeight);
            } catch (e) {
                // Ignore rendering error if image fails
            }
        }

        // 2. Render Text Details
        const truncatedName = item.name.length > 40 ? item.name.substring(0, 37) + '...' : item.name;

        // Item Code
        doc.setFont(undefined, 'normal');
        doc.setFontSize(10);
        doc.setTextColor(0);
        doc.text(String(item.code), 40, yPosition + 7);

        // Item Name (Top line)
        doc.setFont(undefined, 'bold');
        doc.setFontSize(9.5);
        doc.text(truncatedName, 75, yPosition + 6);

        // Category (Bottom line below Item Name)
        doc.setFont(undefined, 'normal');
        doc.setFontSize(8);
        doc.setTextColor(110); // Gray color for category
        doc.text(String(item.category), 75, yPosition + 11);

        // Quantity
        doc.setFont(undefined, 'bold');
        doc.setFontSize(10);
        doc.setTextColor(0);
        doc.text(String(item.qty), 180, yPosition + 8);

        totalQuantity += item.qty;
        yPosition += rowHeight;
    }

    // Summary Footer
    doc.line(14, yPosition, 195, yPosition);
    yPosition += 8;
    doc.setFont(undefined, 'bold');
    doc.setFontSize(10);
    doc.text(`Total Quantities Ordered: ${totalQuantity}`, 14, yPosition);

    // Save File
    doc.save(`Order_${Date.now()}.pdf`);
}
