import { adjustFontSize } from './modules/fontSize.js';
import { toggleTheme, setTheme } from './modules/themeToggle.js';
import { startReading, pauseReading, resumeReading, setButtonState } from './modules/textReader.js';

document.addEventListener('DOMContentLoaded', function() {
    const increaseFontSizeBtn = document.getElementById('acessibilidade_icon_aumentar');
    const decreaseFontSizeBtn = document.getElementById('acessibilidade_icon_diminuir');
    const toggleHighContrastBtn = document.getElementById('acessibilidade_icon_contraste');
    const readTextBtn = document.getElementById('read-text');
    const pauseTextBtn = document.getElementById('pause-text');
    const stoppedTextBtn = document.getElementById('stop-text');

    // Adiciona os eventos de clique aos botões
    increaseFontSizeBtn.addEventListener('click', () => {
        adjustFontSize(1.1); // Aumenta o tamanho da fonte em 10%
    });
    
    decreaseFontSizeBtn.addEventListener('click', () => {
        adjustFontSize(0.9); // Diminui o tamanho da fonte em 10%
    });

    toggleHighContrastBtn.addEventListener('click', toggleTheme);

    readTextBtn.addEventListener('click', startReading);
    pauseTextBtn.addEventListener('click', pauseReading);
    stoppedTextBtn.addEventListener('click', resumeReading);

    // Inicializa os botões no estado inicial (a iniciar)
    setButtonState('play');
});
