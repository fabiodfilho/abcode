
const cursos = {
    "python": {
        "titulo": "Python Developer",
        "descricao": "Aprenda uma linguagem versátil e poderosa, perfeita para iniciantes e profissionais. \n Desde scripts simples até projetos complexos, descubra como Python \n pode transformar suas ideias em realidade.",
        "dados": {
            "horasConteudo": 76,
            "projetos": 7,
            "desafios": 2
        },
        "modulos": [
            {
                "titulo": "Fundamentos da Plataforma Python",
                "atividades": 6
            },
            {
                "titulo": "Escopos e Estruturas de Controles em Python",
                "atividades": 6
            },
            {
                "titulo": "Programação Orientada a Objetos em Python",
                "atividades": 5
            },
            {
                "titulo": "Estrutura de Dados e API de Streams em Python",
                "atividades": 8
            },
            {
                "titulo": "Gerenciamento de dependências em projetos Python",
                "atividades": 3
            },
            {
                "titulo": "Qualidade de Código e Boas Práticas com Python",
                "atividades": 8
            },
            {
                "titulo": "Conhecendo o Django Framework",
                "atividades": 8
            }
        ]
    },
};
function carregarDescricao(curso) {
    const descricaoCurso = document.getElementById('descricao-curso');
    descricaoCurso.innerHTML = curso.descricao;
}

function carregarDados(curso) {
    const dadosCurso = document.getElementById('dados-curso');
    dadosCurso.innerHTML = `
        <div class="container-info">
            <div class="numero numerocorpython">${curso.dados.horasConteudo}</div>
            <div class="texto">Horas de conteúdo</div>
            <div class="numero numerocorpython">${curso.dados.projetos}</div>
            <div class="texto" id="textomod">Projetos para o seu portfólio</div>
            <div class="numero numerocorpython">${curso.dados.desafios}</div>
            <div class="texto" id="textomod">Desafios de código</div>
        </div>
    `;

}
function carregarModulos(curso) {
    const modulosCurso = document.getElementById('modulos-curso');
    modulosCurso.innerHTML = curso.modulos.map(modulo => `
        <ul>
            <li><span class="conteudo">${modulo.titulo}</span></li>
            <br>
            <li><span class="atividade">${modulo.atividades} atividades</span></li>
            <br>
        </ul>
    `).join('');
}
function carregarCurso(cursoNome) {
    const curso = cursos[cursoNome];
    if (curso) {
        carregarDescricao(curso);
        carregarDados(curso);
        carregarModulos(curso);
    } else {
        console.error("Curso não encontrado:", cursoNome);
    }
}
// Carregar o curso quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoNome = urlParams.get('curso') || 'python'; 
    carregarCurso(cursoNome);
});
