// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mensagem de boas-vindas
    alert('Bem-vindo à BiblioDaisy! Aproveite sua visita.');

    // Animação de rolagem suave para links de navegação
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
