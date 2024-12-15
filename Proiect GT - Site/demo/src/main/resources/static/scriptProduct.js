document.addEventListener('DOMContentLoaded', async function () {
    // Extrage ID-ul produsului din URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Dacă ID-ul nu este valid, afișează un mesaj
    if (!productId) {
        alert('Invalid product ID!');
        return;
    }

    try {
        // Fă o cerere către server pentru a obține detaliile produsului
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
            throw new Error('Could not fetch product details');
        }

        const productData = await response.json();

        // Populează pagina cu detaliile produsului
        document.querySelector('.product-name').textContent = productData.name;
        document.querySelector('.product-description').textContent = productData.description;
        document.querySelector('.product-price').textContent = `$${productData.price}`;
        document.querySelector('.product-image').src = productData.imageUrl;
    } catch (error) {
        console.error(error);
        alert('Could not load product details.');
    }
});

if (!productId) {
    alert("Invalid product ID.");
    window.location.href = 'index.html';
}

