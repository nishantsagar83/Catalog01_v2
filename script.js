document.addEventListener('DOMContentLoaded', () => {
    const categories = new Set();

    // Load product data from JSON file (assuming inventory.json is in the same directory)
    fetch('inventory.json')
        .then(response => {
            console.log('Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);
            const productList = document.getElementById('productList');
            const categorySelect = document.getElementById('categorySelect');

            // Populate category select dropdown
            Array.from(categories).sort().forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });

            // Populate product list
            data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('product-item');

                if (item.ProductImage1) {
                    const img = document.createElement('img');
                    img.src = `./images/${item.ProductImage1}`;
                    console.log(`Image src: ${img.src}`);
                    itemDiv.appendChild(img);
                }

                const nameSpan = document.createElement('span');
                nameSpan.textContent = item.ItemName;
                itemDiv.appendChild(nameSpan);

                const codeSpan = document.createElement('span');
                codeSpan.textContent = `Code: ${item.ItemCode}`;
                itemDiv.appendChild(codeSpan);

                productList.appendChild(itemDiv);
            });

            // Handle search input
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase();
                console.log(`Search query: ${query}`);
                productList.querySelectorAll('.product-item').forEach(productItem => {
                    const itemName = productItem.querySelector('span:eq(0)').textContent.toLowerCase();
                    const itemCode = productItem.querySelector('span:eq(1)').textContent.toLowerCase().replace('code: ', '');
                    if (itemName.includes(query) || itemCode.includes(query)) {
                        console.log(`Match found for ${query}`);
                        productItem.style.display = '';
                    } else {
                        productItem.style.display = 'none';
                    }
                });
            });

            // Handle category selection
            categorySelect.addEventListener('change', () => {
                const selectedCategory = categorySelect.value;
                productList.querySelectorAll('.product-item').forEach(productItem => {
                    if (productItem.querySelector('span:eq(0)').textContent.includes(selectedCategory)) {
                        productItem.style.display = '';
                    } else {
                        productItem.style.display = 'none';
                    }
                });
            });
        })
        .catch(error => console.error('Error loading data:', error));
});
