// Função para carregar a navbar e inserir no elemento com id "navbar-container"
document.addEventListener("DOMContentLoaded", function() {
    fetch('/pages/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        const hamburgerButton = document.querySelector('.hamburger-menu');
        const navbar = document.querySelector('.navbar');
        
        if (hamburgerButton && navbar) {
            hamburgerButton.addEventListener('click', () => {
                navbar.classList.toggle('show'); // Alterna a visibilidade da navbar
            });
        }
    })
    .catch(error => console.error('Erro ao carregar a navbar:', error));

