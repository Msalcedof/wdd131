// Product array
const products = [
    { id: 'prod1', name: 'Concrete Mixer' },
    { id: 'prod2', name: 'Zinc Roofing' },
    { id: 'prod3', name: 'Welding Kit' },
    { id: 'prod4', name: 'Remodeling Package' },
];

// Populate the Product Name options dynamically
const productNameSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

// Set the Last Modified Date dynamically
document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.getElementById("last-modified");
    const lastModifiedDate = document.lastModified;

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate}`;
    }
});