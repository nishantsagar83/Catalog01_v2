
console.log("JavaScript is successfully linked!");

        let rawExcelData = [];
        // Local state object mapping item codes to user selection counts
        let orderBasket = {}; 

        async function loadCatalogData() {
    try {
        const response = await fetch('./products.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        rawExcelData = await response.json();
        
        // 1. First, build the clean array tracking references
        buildNormalizedArray(rawExcelData); 
        
        // 2. Second, dynamically generate and render all the HTML cards to the grid
        renderCatalog(); 
        
        // 3. Third, sync only the basket quantities to the newly created input boxes
        syncQuantities();
        
    } catch (error) {
        console.error('Failed to load JSON data:', error);
    }
}


        function initCatalog(data) {
    if (!data || !Array.isArray(data)) return;
    
    data.forEach(item => {
        normalizeData(item);
    });
}

        // Ensure script executes ONLY after all HTML layout nodes are parsed safely
    document.addEventListener("DOMContentLoaded", function loadCatalogData() {
    // 1. Fetch data safely
    fetch('./products.json') // or your local inventory data array
        .then(response => {
            if (!response.ok) throw new Error("Network response error");
            return response.json();
        })
        .then(data => {
            initCatalog(data);
        })
        .catch(error => console.error("Failed to load JSON data:", error));
});

     
        var normalizedProducts = [];

        function getField(obj, possibleKeys) {
            for (var i = 0; i < possibleKeys.length; i++) {
                if (obj[possibleKeys[i]] !== undefined) {
                    return obj[possibleKeys[i]];
                }
            }
            return '';
        }

function normalizeData(item) {
    // 1. Secure the unique identifier from your actual JSON keys ("Item Code")
    const itemCode = item['Item Code'] || item.code || item.id || item.itemCode;
    const itemName = item['Item Name'] || item.name || item.title;
    const category = item['Category'] || item.category;
    const productImage = item['Product Image'] || item.productImage;

    if (!itemCode) {
        console.warn("Skipping record: Payload entry lacks an 'Item Code' definition.", item);
        return;
    }

    // 2. Locate the corresponding parent product layout card element in the grid
    const cardElement = document.querySelector(`[data-code="${itemCode}"]`);
    
    // SAFETY GUARD: If the HTML card wasn't rendered into the DOM grid, bail out safely!
    if (!cardElement) {
        // Changing to console.info so it doesn't flood your console as a heavy warning
        console.info(`Card with data-code="${itemCode}" is not hardcoded in the HTML DOM (Skipped mapping).`);
        return; 
    }

    // 3. Robust Null-Safe mapping engine for Title strings
    const nameNode = cardElement.querySelector('.item-name') || 
                     cardElement.querySelector('.product-title') || 
                     cardElement.querySelector('h3');
                     
    if (nameNode) {
        nameNode.textContent = itemName || "Unnamed Item";
    } else {
        console.error(`Could not locate a text container class tag for item: ${itemCode}`);
    }

    // 4. Robust Null-Safe mapping engine for Product Identifiers
    const codeNode = cardElement.querySelector('.item-code') || 
                     cardElement.querySelector('.product-code');
                     
    if (codeNode) {
        codeNode.textContent = itemCode;
    }

    // 5. Robust Null-Safe mapping engine - Fixed to reference 'orderBasket' instead of 'orderCart'
    const qtyInputNode = cardElement.querySelector('.qty-input') || 
                         cardElement.querySelector('input[type="number"]');
                         
    if (qtyInputNode) {
        // Changed orderCart to orderBasket to match your script's state variable name
        const storedQty = orderBasket[itemCode] ? orderBasket[itemCode] : (item.initialQty || 0);
        qtyInputNode.value = storedQty;
    }
}


        function populateCategories() {
            var filterSelect = document.getElementById('categoryFilter');
            var categoriesMap = {};
            
            for (var i = 0; i < normalizedProducts.length; i++) {
                if (normalizedProducts[i].category && normalizedProducts[i].category.trim() !== "") {
                    categoriesMap[normalizedProducts[i].category] = true;
                }
            }

            var html = '<option value="all">All Categories</option>';
            for (var cat in categoriesMap) {
                if (categoriesMap.hasOwnProperty(cat)) {
                    html += '<option value="' + cat + '">' + cat + '</option>';
                }
            }
            filterSelect.innerHTML = html;
        }
function renderCatalog() {
    var grid = document.getElementById('productGrid');
    var selectedCategory = document.getElementById('categoryFilter').value;
    var searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

    var htmlString = '';
    var matchCount = 0;

    for (var i = 0; i < normalizedProducts.length; i++) {
        var item = normalizedProducts[i];
        
        // Safety checks to handle missing data fields without throwing fatal crashes
        var itemNameLower = (item.name || '').toLowerCase();
        var itemCodeLower = (item.code || '').toLowerCase();
        var itemCategoryLower = (item.category || '').toLowerCase();

        var matchesCategory = (selectedCategory === 'all' || item.category === selectedCategory);
        var matchesSearch = (itemNameLower.indexOf(searchTerm) !== -1 || 
                             itemCodeLower.indexOf(searchTerm) !== -1 || 
                             itemCategoryLower.indexOf(searchTerm) !== -1);

        if (matchesCategory && matchesSearch) {
            matchCount++;
            
            // CRITICAL FIX: Forces reading from local image assets only, ignoring drive variables
            var finalImg = item.relativeImg || './images/' + item.code + '.png';
            var currentQty = orderBasket[item.code] || 0;

            // Secure replacements to preserve layouts if product titles contain double quotes
            var escapedName = (item.name || '').replace(/"/g, '&quot;');

            // CRITICAL HOOK: Added the missing [data-code] selector context right inside the card container div
            htmlString += `
                <div class="card" data-code="${item.code}">
                    <div class="image-container">
                        <img src="${finalImg}" alt="${escapedName}" onerror="this.src='https://placehold.co'">
                    </div>
                    <div class="card-content">
                        <span class="category-badge">${item.category || 'General'}</span>
                        <h3 class="item-name" title="${escapedName}">${item.name}</h3>
                        <div class="card-footer">
                            <span class="item-code">${item.code}</span>
                            <div class="qty-controls">
                                <button class="qty-btn" onclick="updateQty('${escapeQuotes(item.code)}', -1)">-</button>
                                <input type="number" class="qty-input" id="input-${item.code}" value="${currentQty}" min="0" onchange="handleInputChange('${escapeQuotes(item.code)}', this.value)">
                                <button class="qty-btn" onclick="updateQty('${escapeQuotes(item.code)}', 1)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    if (matchCount === 0) {
        grid.innerHTML = '<div class="no-results">No items found matching your criteria.</div>';
    } else {
        grid.innerHTML = htmlString;
    }
}

        // Manage increment and decrement button tracking states
        function updateQty(itemCode, change) {
            let currentQty = orderBasket[itemCode] || 0;
            let newQty = currentQty + change;
            
            if (newQty <= 0) {
                delete orderBasket[itemCode];
                newQty = 0;
            } else {
                orderBasket[itemCode] = newQty;
            }
            
            const inputField = document.getElementById(`input-${itemCode}`);
            if (inputField) inputField.value = newQty;
            calculateTotals();
        }

        // Manage keypress keyboard values input overrides
        function handleInputChange(itemCode, value) {
            let parsedValue = parseInt(value, 10);
            if (isNaN(parsedValue) || parsedValue <= 0) {
                delete orderBasket[itemCode];
                parsedValue = 0;
            } else {
                orderBasket[itemCode] = parsedValue;
            }
            
            const inputField = document.getElementById(`input-${itemCode}`);
            if (inputField) inputField.value = parsedValue;
            calculateTotals();
        }

        // Calculate active values and toggle bottom floating bar view state
        function calculateTotals() {
            let uniqueItemsCount = Object.keys(orderBasket).length;
            let totalQuantity = Object.values(orderBasket).reduce((sum, qty) => sum + qty, 0);

            document.getElementById('totalItemsSelected').textContent = uniqueItemsCount;
            document.getElementById('totalQtySelected').textContent = totalQuantity;

            const orderBar = document.getElementById('orderSummaryBar');
            if (totalQuantity > 0) {
                orderBar.classList.add('active');
            } else {
                orderBar.classList.remove('active');
            }
        }

        // Log final layout structure to review selections
        function submitOrder() {
            const finalOrder = Object.keys(orderBasket).map(code => {
                const itemDetails = normalizedProducts.find(i => i.code === code);
                return {
                    code: code,
                    name: itemDetails ? itemDetails.name : 'Unknown',
                    quantity: orderBasket[code]
                };
            });

            console.log("Current Final Order:", finalOrder);
            alert("Order compilation captured in the browser console tool!\nUnique items selected: " + finalOrder.length);
        }

       // --- CONFIGURATION ---
// Replace this with your company's mobile number (Country code + phone number, no '+' or spaces)
const WHATSAPP_PHONE_NUMBER = "201090557722"; 

// --- GENERATE PDF NATIVELY USING JSPDF ---
function generatePDF() {
    // Access the loaded window modules from jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const currentDate = new Date().toLocaleString();
    
    // Page Header Styling
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.text("SMT INVENTORY CATALOG ORDER", 14, 20);
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Date Generated: " + currentDate, 14, 28);
    doc.text("--------------------------------------------------------------------------------", 14, 34);
    
    // Table Column Headers setup
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text("Code", 14, 42);
    doc.text("Item Name Description", 45, 42);
    doc.text("Category Description", 45, 42);
    doc.text("Qty", 180, 42);
    doc.text("--------------------------------------------------------------------------------", 14, 46);
    
    // Loop through order basket and print line records dynamically
    doc.setFont("Helvetica", "normal");
    let yPosition = 54;
    let totalQty = 0;
    
    for (const code in orderBasket) {
        const item = normalizedProducts.find(p => p.code === code);
        const qty = orderBasket[code];
        totalQty += qty;
        
        // Safety wrap: Truncate extra long item names so they do not overlap text rows
        let itemName = item ? item.name : 'Unknown Product';
        if (itemName.length > 55) {
            itemName = itemName.substring(0, 52) + "...";
        }
        
        doc.text(code, 14, yPosition);
        doc.text(itemName, 45, yPosition);
        doc.text(category, 180, yPosition);
        doc.text(String(qty), 325, yPosition);
        
        yPosition += 10;
        
        // Page breaking protection: create a new page if the entries run low on space
        if (yPosition > 275) {
            doc.addPage();
            yPosition = 20;
        }
    }
    
    // Table Footer calculation summaries
    doc.text("--------------------------------------------------------------------------------", 14, yPosition);
    doc.setFont("Helvetica", "bold");
    yPosition += 10;
    doc.text("Unique Items Ordered: " + Object.keys(orderBasket).length, 14, yPosition);
    doc.text("Total Quantity: " + totalQty + " pcs", 140, yPosition);
    
    // Instantly save and prompt file download to device filesystem
    doc.save("SMT-Order-" + new Date().toISOString().slice(0,10) + ".pdf");
}

// --- OPTIMIZED WHATSAPP DELIVERABILITY ---
function shareToWhatsApp() {
    let message = "🛍️ *NEW SMT INVENTORY ORDER*\n";
    message += "📅 Date: " + new Date().toLocaleDateString() + "\n";
    message += "─────────────────────\n\n";

    let index = 1;
    let totalQty = 0;

    for (const code in orderBasket) {
        const item = normalizedProducts.find(p => p.code === code);
        const qty = orderBasket[code];
        totalQty += qty;

        message += index++ + ". *Code:* `" + code + "`\n";
        message += "   *Item:* " + (item ? item.name : 'Unknown') + "\n";
        message += "   *Category:* " + (item ? item.category : 'Unknown') + "\n";
        message += "   *Qty:* " + qty + " pcs\n\n";
    }

    message += "─────────────────────\n";
    message += "📊 *Summary:* " + Object.keys(orderBasket).length + " unique items (" + totalQty + " total pieces).\n\n";
    message += "📎 _Please remember to attach the downloaded PDF invoice file to this chat screen instructions before sending._";

    // Copy textual receipt contents to system clipboard automatically for the client
    navigator.clipboard.writeText(message).catch(err => {
        console.log("Clipboard bypass fallback tracker initialized");
    });

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = "https://whatsapp.com" + WHATSAPP_PHONE_NUMBER + "&text=" + encodedText;
    
    // Redirect instantly to the active app room interface
    window.open(whatsappUrl, '_blank');
}

     function renderFloatingBar() {
    const orderBar = document.getElementById('order-bar');
    const topPrompt = document.getElementById('top-action-prompt');
    let totalItems = 0;
    
    for (const code in orderCart) {
        totalItems += orderCart[code].qty;
    }
    
    document.getElementById('total-items-count').innerText = totalItems;
    
    // Toggle both UI elements dynamically when quantities change
    if (totalItems > 0) {
        orderBar.classList.add('active');
        topPrompt.classList.add('visible');
    } else {
        orderBar.classList.remove('active');
        topPrompt.classList.remove('visible');
    }
}

     // Helper function to prevent broken inline JS strings if data contains quotes
function escapeQuotes(str) {
    return String(str).replace(/'/g, "\\'").replace(/"/g, "&quot;");
}
function buildNormalizedArray(data) {
    if (!data || !Array.isArray(data)) return;
    normalizedProducts = [];
    
    data.forEach(item => {
        const itemCode = item['Item Code'] || item.code;
        if (itemCode) {
            normalizedProducts.push({
                code: itemCode,
                name: item['Item Name'] || item.name,
                category: item['Category'] || item.category,
                relativeImg: item['Product Image1'] // <--- Focus explicitly on your local property key name
            });
        }
    });
    populateCategories();
    renderCatalog();
  syncQuantities();
}

     function syncQuantities() {
    // Loop through everything currently in your JSON array data
    rawExcelData.forEach(item => {
        const itemCode = item['Item Code'] || item.code || item.id;
        if (!itemCode) return;

        // Look for the specific card input drawn by renderCatalog()
        const cardElement = document.querySelector(`[data-code="${itemCode}"]`);
        if (!cardElement) return;

        const qtyInputNode = cardElement.querySelector('.qty-input') || 
                             cardElement.querySelector('input[type="number"]');
                             
        if (qtyInputNode) {
            // Read from your active selection object (orderBasket)
            const storedQty = orderBasket[itemCode] ? orderBasket[itemCode] : 0;
            qtyInputNode.value = storedQty;
        }
    });
}

