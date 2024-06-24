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
});

    