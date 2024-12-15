document.addEventListener('DOMContentLoaded', function () {
    // Funcție pentru includerea unui fișier HTML
    function includeHTML(filePath, elementId) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Eroare la încărcarea ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;

                // Inițializare funcționalități specifice după încărcarea HTML-ului
                if (elementId === 'header-placeholder') {
                    initializeHeaderFunctions();
                }
                if (elementId === 'footer-placeholder') {
                    console.log('Footer inclus cu succes.');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Include header-ul și footer-ul
    includeHTML('Header.html', 'header-placeholder');
    includeHTML('Footer.html', 'footer-placeholder');

    // Funcții pentru Header
    function initializeHeaderFunctions() {
        const loginBtn = document.getElementById('login-btn');
        const loginSideCollapse = document.getElementById('login-side-collapse');
        const closeSideCollapse = document.getElementById('close-side-collapse');
        const loginForm = document.getElementById('login-form');
        const registerBtn = document.getElementById('register-btn');

        // Deschidere side collapse
        if (loginBtn && loginSideCollapse) {
            loginBtn.addEventListener('click', function () {
                loginSideCollapse.classList.add('active');
            });
        }

        // Închidere side collapse
        if (closeSideCollapse && loginSideCollapse) {
            closeSideCollapse.addEventListener('click', function () {
                loginSideCollapse.classList.remove('active');
            });
        }

        // Gestionare eveniment pentru login
        if (loginForm) {
            loginForm.addEventListener('submit', async function (e) {
                e.preventDefault(); // Previne reîncărcarea paginii

                // Colectarea datelor de login
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                // Trimite cererea de login către server
                try {
                    const response = await fetch('/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        alert('Autentificare reușită!');
                        // Redirecționare după autentificare
                        window.location.href = '/index.html';
                    } else {
                        const error = await response.text();
                        alert(`Eroare la autentificare: ${error}`);
                    }
                } catch (error) {
                    console.error('Eroare la cererea de autentificare:', error);
                    alert('Eroare la autentificare. Încercați din nou.');
                }
            });
        }

        // Redirecționare către pagina de înregistrare
        if (registerBtn) {
            registerBtn.addEventListener('click', function () {
                window.location.href = 'Register.html';
            });
        }
    }
});
