'use strict'

function addAluno() {
    //criação das variáveis para armazenar os dados de cada aluno inserido pelo professor
    var nome = document.getElementById("nomeAluno");
    var disciplina1 = document.getElementById("disciplina1");
    var disciplina2 = document.getElementById("disciplina2");
    var disciplina3 = document.getElementById("disciplina3");
    var disciplina4 = document.getElementById("disciplina4");
    var disciplina5 = document.getElementById("disciplina5");
    var frequencia = document.getElementById("frequencia");

    //armazenamento dos dados no localStorage em formato JSON
    var alunos = JSON.parse(localStorage.getItem("dadosAlunos"));

    //caso não tenha nenhum dado inserido, insere uma lista vazia
    if (alunos == null) {
        localStorage.setItem("dadosAlunos", "[]");
        alunos = [];
    }

    //criação de um objeto que contém todos os dados necessários de cada aluno
    var auxRegistro = {
        aluno: nome.value,
        d1: disciplina1.value,
        d2: disciplina2.value,
        d3: disciplina3.value,
        d4: disciplina4.value,
        d5: disciplina5.value,
        freq: frequencia.value
    }

    //inserção de cada objeto ao final da lista, para que o último não sobrescreva o anterior e todos os dados sejam armazenados
    alunos.push(auxRegistro);

    localStorage.setItem("dadosAlunos", JSON.stringify(alunos));
    alert("Aluno inserido com sucesso!");
    window.location.href = 'index.html';
}

function limpaBaseAlunos(){
    if(confirm("Deseja continuar?"))
        localStorage.setItem("dadosAlunos", "[]");
}