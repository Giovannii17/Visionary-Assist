// Botão "Comprar"
document.getElementById("comprar-btn").addEventListener("click", function () {
    setTimeout(function () {
        alert("Disponível em breve");
    }, 0); 
});

// Captura os elementos dos links pelo ID e adiciona navegação
document.getElementById('home-link').addEventListener('click', function() {
    window.location.href = '../Home/home.html';
});

document.getElementById('services-link').addEventListener('click', function() {
    window.location.href = '../Serviço/servico.html';
});

document.getElementById('about-link').addEventListener('click', function() {
    window.location.href = '../Sobre/sobre.html';
});

document.getElementById('support-link').addEventListener('click', function() {
    window.location.href = '../Suporte/suporte.html';
});

// Adiciona a navegação por teclado e foco visível
interactiveElements.forEach(element => {
    element.addEventListener('focus', () => {
        element.classList.add('foco-visivel');
    });

    element.addEventListener('blur', () => {
        element.classList.remove('foco-visivel');
    });
    element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            element.click();
        }
    });
});

