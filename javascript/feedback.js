const containerFeedback = document.querySelector('.container-feedback');
const formFeedback = document.querySelector('.form-feedback');
const botaoEnviar = document.querySelector('.botao-enviar');

function abrirFeedback() {
    containerFeedback.style.display = 'block'; 
}

function fecharFeedback() {
    containerFeedback.style.display = 'none'; 
}

function enviarFeedback(e) {
    e.preventDefault(); 
    const avaliacao = document.getElementById('avaliacao-geral').value;
    const comentarios = document.getElementById('comentarios').value;
    console.log("Avaliação:", avaliacao);
    console.log("Comentários:", comentarios);
    fecharFeedback();
}

botaoEnviar.addEventListener('click', enviarFeedback);
containerFeedback.addEventListener('click', function(e) {
    if (e.target === containerFeedback) {
        fecharFeedback();
    }
});
setTimeout(abrirFeedback); 