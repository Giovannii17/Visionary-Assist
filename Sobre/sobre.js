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

    element.addEventListener('keydown', (event) => {
        // Verifica se a tecla Enter ou Espaço foi pressionada
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            element.click();
        }
    });

    // Adiciona feedback auditivo ao clicar em botões ou links
    element.addEventListener('click', () => {
        const audio = new Audio('click-sound.mp3'); // Substitua pelo caminho do seu arquivo de áudio
        audio.play();
    });
});

// Feedback auditivo ao carregar a página
window.addEventListener('load', () => {
    const audio = new Audio('page-load-sound.mp3'); // Substitua pelo caminho do seu arquivo de áudio
    audio.play();
});
