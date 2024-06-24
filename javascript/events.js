document.addEventListener('DOMContentLoaded', function() {
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

    const increaseFontSizeBtn = document.getElementById('acessibilidade_icon_aumentar');
    const decreaseFontSizeBtn = document.getElementById('acessibilidade_icon_diminuir');
    const toggleHighContrastBtn = document.getElementById('acessibilidade_icon_contraste');
    const readTextBtn = document.getElementById('read-text');
    const pauseTextBtn = document.getElementById('pause-text');
    const stoppedTextBtn = document.getElementById('stop-text');

    function adjustFontSize(multiplier) {
        const elements = document.querySelectorAll('body *'); // Seleciona todos os elementos dentro do body
        elements.forEach(el => {
            const currentFontSize = window.getComputedStyle(el).fontSize;
            const currentSize = parseFloat(currentFontSize);
            el.style.fontSize = `${currentSize * multiplier}px`;
        });
    }
    
    // Adiciona os eventos de clique aos botões
    increaseFontSizeBtn.addEventListener('click', () => {
        adjustFontSize(1.1); // Aumenta o tamanho da fonte em 10%
    });
    
    decreaseFontSizeBtn.addEventListener('click', () => {
        adjustFontSize(0.9); // Diminui o tamanho da fonte em 10%
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

    let utterance = null;
    let isReading = false;
    let isPaused = false;

    function startReading() {
        if (!isReading) {
            let textContent = document.body.innerText;

            // Adiciona o alt das imagens ao texto
            const images = document.getElementsByTagName('img');
            for (let img of images) {
                if (img.alt) {
                    textContent += ' ' + img.alt;
                }
            }

            utterance = new SpeechSynthesisUtterance(textContent);
            utterance.lang = 'pt-BR';

            utterance.onstart = function() {
                isReading = true;
                isPaused = false;
                setButtonState('pause');
            };

            utterance.onend = function() {
                isReading = false;
                isPaused = false;
                setButtonState('play');
            };

            window.speechSynthesis.speak(utterance);
        }
    }

    function pauseReading() {
        if (isReading && !isPaused) {
            window.speechSynthesis.pause();
            isPaused = true;
            setButtonState('stopped');
        }
    }

    function resumeReading() {
        if (isPaused) {
            window.speechSynthesis.resume();
            isPaused = false;
            setButtonState('pause');
        }
    }

    function setButtonState(state) {
        if (state === 'play') {
            readTextBtn.querySelector('img').src = 'images/acessibilidade_audio.png';
            readTextBtn.classList.remove('hidden');
            pauseTextBtn.classList.add('hidden');
            stoppedTextBtn.classList.add('hidden');
        } else if (state === 'pause') {
            readTextBtn.querySelector('img').src = 'images/acessibilidade_audio_pausa.png';
            readTextBtn.classList.add('hidden');
            pauseTextBtn.classList.remove('hidden');
            stoppedTextBtn.classList.add('hidden');
        } else if (state === 'stopped') {
            readTextBtn.querySelector('img').src = 'images/acessibilidade_audio_stopped.png';
            readTextBtn.classList.add('hidden');
            pauseTextBtn.classList.add('hidden');
            stoppedTextBtn.classList.remove('hidden');
        }
    }

    readTextBtn.addEventListener('click', startReading);
    pauseTextBtn.addEventListener('click', pauseReading);
    stoppedTextBtn.addEventListener('click', resumeReading);

    // Inicializa os botões no estado inicial (a iniciar)
    setButtonState('play');

    // Evento para finalizar o áudio ao recarregar a página
    window.addEventListener('beforeunload', function() {
        if (isReading) {
            window.speechSynthesis.cancel();
        }
    });
});