'use strict'

function addAluno() {
    //Criação das variáveis para armazenar os dados de cada aluno inserido pelo professor
    var nome = document.getElementById("nomeAluno");
    var disciplina1 = document.getElementById("disciplina1");
    var disciplina2 = document.getElementById("disciplina2");
    var disciplina3 = document.getElementById("disciplina3");
    var disciplina4 = document.getElementById("disciplina4");
    var disciplina5 = document.getElementById("disciplina5");
    var frequencia = document.getElementById("frequencia");

    //Armazena dados no localStorage em formato JSON
    var alunos = JSON.parse(localStorage.getItem("dadosAlunos"));

    //Insere uma lista vazia caso não tenha nenhum dado inserido
    if (alunos == null) {
        localStorage.setItem("dadosAlunos", "[]");
        alunos = [];
    }

    //Cria um objeto que contém todos os dados necessários de cada aluno
    var auxRegistro = {
        aluno: nome.value,
        d1: disciplina1.value,
        d2: disciplina2.value,
        d3: disciplina3.value,
        d4: disciplina4.value,
        d5: disciplina5.value,
        freq: frequencia.value
    }

    //Insere cada objeto ao final da lista, para que o último não sobrescreva o anterior e todos os dados sejam armazenados
    alunos.push(auxRegistro);

    localStorage.setItem("dadosAlunos", JSON.stringify(alunos));
    alert("Aluno inserido com sucesso!");
    window.location.href = 'index.html';
}

function limpaBaseAlunos(){
    //Envia um alerta ao usuário para a confirmação sobre limpar a base de dados
    if(confirm("Deseja continuar?"))
        localStorage.setItem("dadosAlunos", "[]");
}