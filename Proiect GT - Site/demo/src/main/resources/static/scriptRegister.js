document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');
    const submitButton = document.getElementById('submit-btn');

    submitButton.addEventListener('click', function () {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert("Parolele nu se potrivesc!");
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password
        };

        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (response.ok) {
                    alert("Înregistrare reușită!");
                    window.location.href = "/index.html";
                } else {
                    return response.json().then(data => {
                        alert("Eroare la înregistrare: " + (data.message || "Necunoscută"));
                    });
                }
            })
            .catch(error => {
                console.error("Eroare la conectarea cu serverul:", error);
                alert("A apărut o eroare. Încearcă din nou.");
            });
    });
});
