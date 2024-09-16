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

// Seleciona todos os elementos interativos (botões, links e inputs)
const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');

// Adiciona a navegação por teclado e foco visível
interactiveElements.forEach(element => {
    element.addEventListener('focus', () => {
        // Adiciona uma classe para dar destaque ao foco
        element.classList.add('foco-visivel');
    });

    element.addEventListener('blur', () => {
        // Remove a classe de destaque ao perder o foco
        element.classList.remove('foco-visivel');
    });
});
