document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent.trim(); // Numele produsului din card
        let productId;

        // Asociază ID-ul cu numele produsului
        switch (productName) {
            case 'RS6 Wheels':
                productId = 1;
                break;
            case 'RSQ8 Wheels':
                productId = 2;
                break;
            case 'Q7 Wheels':
                productId = 3;
                break;
            case 'RS4 Wheels':
                productId = 4;
                break;
            default:
                alert('Produs necunoscut!');
                return; // Opresc execuția dacă produsul nu este recunoscut
        }

        // Redirecționează către pagina specifică produsului
        window.location.href = `/product.html?id=${productId}`;
    });
});

