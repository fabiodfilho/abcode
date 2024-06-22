document.addEventListener('DOMContentLoaded', function() {
    // Obtenha o botão e os links de dados
    const button = document.getElementById('redirectButton');
    const links = [
        "https://github.com/04julxa",
        "https://github.com/WOOB0T",
        "https://github.com/renatacmantovani",
        "https://github.com/fabiodfilho"
    ];

    // Adicione um evento de clique ao botão
    button.addEventListener('click', function() {
        // Escolha aleatoriamente um link
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex];

        // Redirecione para o link escolhido
        window.location.href = randomLink;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos da barra de acessibilidade
    const increaseFontSizeBtn = document.getElementById('acessibilidade_icon_aumentar');
    const decreaseFontSizeBtn = document.getElementById('acessibilidade_icon_diminuir');
    const toggleHighContrastBtn = document.getElementById('acessibilidade_icon_contraste');
    const readTextBtn = document.getElementById('acessibilidade_icon_audio');

    // Variável para armazenar o tamanho atual da fonte
    let currentFontSize = 16; // Tamanho base de fonte em pixels

    // Função para aumentar o tamanho da fonte
    increaseFontSizeBtn.addEventListener('click', function() {
        currentFontSize += 2;
        document.body.style.fontSize = currentFontSize + 'px';
    });

    // Função para diminuir o tamanho da fonte
    decreaseFontSizeBtn.addEventListener('click', function() {
        if (currentFontSize > 10) { // Limite mínimo para legibilidade
            currentFontSize -= 2;
            document.body.style.fontSize = currentFontSize + 'px';
        }
    });

    // Função para alternar entre temas claro e escuro
    let isLightTheme = localStorage.getItem('isLightTheme') === 'true'; // Recupera o estado do tema do localStorage
    setTheme(isLightTheme); // Define o tema inicial com base no valor recuperado

    toggleHighContrastBtn.addEventListener('click', function() {
        isLightTheme = !isLightTheme; // Alterna o estado do tema
        setTheme(isLightTheme); // Define o tema com base no novo estado
        localStorage.setItem('isLightTheme', isLightTheme); // Salva o estado do tema no localStorage
    });

    // Função para definir o tema
    function setTheme(isLight) {
        if (isLight) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }

    readTextBtn.addEventListener('click', function() {
        let textContent = document.body.innerText; // Seleciona todo o texto do corpo da página

        // Adiciona o alt das imagens ao texto
        const images = document.getElementsByTagName('img');
        for (let img of images) {
            if (img.alt) {
                textContent += ' ' + img.alt;
            }
        }

        let utterance = new SpeechSynthesisUtterance(textContent);
        utterance.lang = 'pt-BR'; // Define o idioma (ajuste conforme necessário)

        window.speechSynthesis.speak(utterance); // Usa a API Web Speech para ler o texto em voz alta
    });
});