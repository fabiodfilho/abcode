const cursos = {
    "python": {
        "titulo": "Python Developer",
        "descricao": "Aprenda uma linguagem versátil e poderosa, perfeita para iniciantes e profissionais. \n Desde scripts simples até projetos complexos, descubra como Python \n pode transformar suas ideias em realidade.",
        "dados": {
            "horasConteudo": 76,
            "projetos": 11,
            "desafios": 35
        },
        "modulos": [
            { "titulo": "Fundamentos da Plataforma Python", "atividades": 6 },
            { "titulo": "Escopos e Estruturas de Controles em Python", "atividades": 6 },
            { "titulo": "Programação Orientada a Objetos em Python", "atividades": 5 },
            { "titulo": "Estrutura de Dados e API de Streams em Python", "atividades": 8 },
            { "titulo": "Gerenciamento de dependências em projetos Python", "atividades": 3 },
            { "titulo": "Qualidade de Código e Boas Práticas com Python", "atividades": 8 },
            { "titulo": "Conhecendo o Django Framework", "atividades": 8 }
        ]
    },
};

function carregarDescricao(curso) {
    const descricaoCurso = document.getElementById('descricao-curso');
    if (!descricaoCurso) {
        console.error("Elemento de descrição do curso não encontrado.");
        return;
    }
    descricaoCurso.innerHTML = curso.descricao.replace(/\n/g, '<br>');
}

function carregarDados(curso) {
    const dadosCurso = document.getElementById('dados-curso');
    if (!dadosCurso) {
        console.error("Elemento de dados do curso não encontrado.");
        return;
    }
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
    if (!modulosCurso) {
        console.error("Elemento de módulos do curso não encontrado.");
        return;
    }
    modulosCurso.innerHTML = curso.modulos.map((modulo, index) => {
        const completed = isModuleCompleted(curso.titulo, index);
        return `
            <ul>
                <li>
                    <span class="conteudo">${modulo.titulo}</span>
                    <input type="checkbox" id="modulo-${index}" ${completed ? 'checked' : ''} 
                           onchange="toggleCompletion('${curso.titulo}', ${index}, '${modulo.titulo}')">
                </li>
                <br>
                <li><span class="atividade">${modulo.atividades} atividades</span></li>
                <br>
            </ul>
        `;
    }).join('');
}

function isModuleCompleted(cursoTitulo, moduloIndex) {
    const completedModules = JSON.parse(localStorage.getItem(cursoTitulo)) || [];
    return completedModules.includes(moduloIndex);
}

async function toggleCompletion(cursoTitulo, moduloIndex, moduloTitulo) {
    let completedModules = JSON.parse(localStorage.getItem(cursoTitulo)) || [];
    if (completedModules.includes(moduloIndex)) {
        completedModules = completedModules.filter(index => index !== moduloIndex);
    } else {
        completedModules.push(moduloIndex);
        exibirMensagemConclusao(moduloTitulo);
    }
    localStorage.setItem(cursoTitulo, JSON.stringify(completedModules));
    await verificarConclusaoECapturarFeedback(cursoTitulo); 
}


async function verificarConclusaoECapturarFeedback(cursoTitulo) {
    const curso = cursos[cursoTitulo];
    if (!curso) {
        console.error("Curso não encontrado:", cursoTitulo);
        return;
    }

    const totalModulos = curso.modulos.length;
    const completedModules = JSON.parse(localStorage.getItem(cursoTitulo)) || [];
    console.log(`Total de módulos: ${totalModulos}, Módulos concluídos: ${completedModules.length}`);

    if (completedModules.length === totalModulos) {
        alert("Parabéns! Você concluiu todos os módulos do curso.");

        const resposta = confirm("Você gostaria de responder a uma pesquisa de satisfação?");
        console.log(`Resposta do usuário: ${resposta}`);

        if (resposta) {
            try {
                console.log("Redirecionando para a página de feedback."); 
                window.location.href = "feedback.html"; // Redirecionar para a página de feedback
            } catch (error) {
                console.error("Erro ao redirecionar para a página de feedback:", error);
                alert("Erro ao redirecionar para a página de feedback."); // Exibir mensagem para o usuário informando que a página de feedback não está disponível
            }
        }
    }
}

function exibirMensagemConclusao(moduloTitulo) {
    setTimeout(() => {
        alert(`Você concluiu o módulo: ${moduloTitulo}`);
    }, 1500);
  
}

function carregarCurso(cursoNome) {
    const curso = cursos[cursoNome];
    if (!curso) {
        console.error("Curso não encontrado:", cursoNome);
        return;
    }
    carregarDescricao(curso);
    carregarDados(curso);
    carregarModulos(curso);
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoNome = urlParams.get('curso') || 'python'; 
    carregarCurso(cursoNome);
});
