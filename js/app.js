// Seleciona elementos do botão "Voltar ao Topo" e do menu
const backToTopButton = document.getElementById('backToTop');
const menuToggle = document.querySelector('.menu-toggle');

// Mostra ou oculta o botão "Voltar ao Topo" ao rolar a página
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Ação do botão "Voltar ao Topo"
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Alterna o menu de navegação
menuToggle.addEventListener('click', function() {
    document.querySelector('.nav_links').classList.toggle('active');
});


