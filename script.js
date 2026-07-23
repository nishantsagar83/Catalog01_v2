console.log("JavaScript is successfully linked!");

let rawExcelData = [];
let normalizedProducts = [];
let orderBasket = {}; // Maps item codes to quantities

document.addEventListener("DOMContentLoaded", function () {
    loadCatalogData();

    // Attach filter & search listeners if elements exist
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

        // 1. Normalize data and populate internal array
        buildNormalizedArray(rawExcelData);

        // 2. Populate the filter dropdown based on available categories
        populateCategories();

        // 3. Render cards into the DOM
        renderCatalog();

        // 4. Sync quantities into rendered elements
        syncQuantities();
    } catch (error) {
        console.error('Failed to load JSON data:', error);
    }
}

function buildNormalizedArray(data) {
    if (!Array.isArray(data)) return;

    normalizedProducts = data.map(item => {
        return {
            code: item['Item Code'] || item.code || item.id || '',
            name: item['Item Name'] || item.name || item.title || 'Unnamed Item',
            category: item['Category'] || item.category || 'Uncategorized',
            image: item['Product Image'] || item.productImage || item.image || '',
            initialQty: item.initialQty || 0
        };
    }).filter(item => item.code !== ''); // Keep items with a valid code
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
                    <img src="${item.image}" alt="${item.name}" class="product-image" onerror="this.src='placeholder.png';" />
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-code">Code: ${item.code}</p>
                    <p class="item-category">${item.category}</p>
                    <div class="quantity-controls">
                        <label>Qty:</label>
                        <input type="number" class="qty-input" min="0" value="${qty}" onchange="updateQuantity('${item.code}', this.value)" />
                    </div>
                </div>
            `;
        }
    });

    grid.innerHTML = htmlString || '<p class="no-results">No products found.</p>';
}

function updateQuantity(itemCode, qty) {
    const numericQty = parseInt(qty, 10) || 0;
    orderBasket[itemCode] = numericQty;
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
