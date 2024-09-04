'use strict'

function exibeLista() {
    //Busca os alunos inseridos previamente
    var alunos = JSON.parse(localStorage.getItem("dadosAlunos"));

    //Tabela html
    var tb = document.getElementById("tbAlunos");

    for (var i = 0; i < alunos.length; i++) {
        //busca a quantidade atual de linhas
        var qtdLinhas = tb.rows.length;
        //Insere nova linha no fim da tabela
        var linha = tb.insertRow(qtdLinhas);

        //inserindo as colunas para os dados de cada aluno
        var cellLinhas = linha.insertCell(0);
        var cellNome = linha.insertCell(1);
        var cellD1 = linha.insertCell(2);
        var cellD2 = linha.insertCell(3);
        var cellD3 = linha.insertCell(4);
        var cellD4 = linha.insertCell(5);
        var cellD5 = linha.insertCell(6);
        var cellFreq = linha.insertCell(7);

        //ordenando as informações em suas respectivas colunas
        cellLinhas.innerHTML = qtdLinhas;
        cellNome.innerHTML = alunos[i].aluno;
        cellD1.innerHTML = alunos[i].d1;
        cellD2.innerHTML = alunos[i].d2;
        cellD3.innerHTML = alunos[i].d3;
        cellD4.innerHTML = alunos[i].d4;
        cellD5.innerHTML = alunos[i].d5;
        cellFreq.innerHTML = alunos[i].freq;
    }

}

function calculaMedia() {
    //Busca os alunos inseridos previamente
    var alunos = JSON.parse(localStorage.getItem("dadosAlunos"));
    //Tabela html
    var tbMedias = document.getElementById("tbMedias");

    var somaD1 = 0;
    var somaD2 = 0;
    var somaD3 = 0;
    var somaD4 = 0;
    var somaD5 = 0;

    for (var i = 0; i < alunos.length; i++) {
        //Função parseInt usada para converter string em inteiro. O 10 no argumento (alunos[i].d1, 10) indica a base numérica para a conversão
        somaD1 += parseFloat(alunos[i].d1) || 0;
        somaD2 += parseFloat(alunos[i].d2) || 0;
        somaD3 += parseFloat(alunos[i].d3) || 0;
        somaD4 += parseFloat(alunos[i].d4) || 0;
        somaD5 += parseFloat(alunos[i].d5) || 0;
    }

    // Limpa as linhas que contém as médias geradas anteriormente
    tbMedias.innerHTML = '';

    //Insere nova linha com as médias atuais
    var linha = tbMedias.insertRow(0);

    //Insere as colunas para os dados de cada aluno
    var cellMedia1 = linha.insertCell(0);
    var cellMedia2 = linha.insertCell(1);
    var cellMedia3 = linha.insertCell(2);
    var cellMedia4 = linha.insertCell(3);
    var cellMedia5 = linha.insertCell(4);

    //Ordena as informações em suas respectivas colunas
    cellMedia1.innerHTML = (somaD1 / alunos.length).toFixed(2);
    cellMedia2.innerHTML = (somaD2 / alunos.length).toFixed(2);
    cellMedia3.innerHTML = (somaD3 / alunos.length).toFixed(2);
    cellMedia4.innerHTML = (somaD4 / alunos.length).toFixed(2);
    cellMedia5.innerHTML = (somaD5 / alunos.length).toFixed(2);

    var tbDestaques = document.getElementById("tbDestaques");

    for (var i = 0; i < alunos.length; i++) {
        if (parseFloat(alunos[i].d1) > parseFloat(cellMedia1.innerHTML) || 
            parseFloat(alunos[i].d2) > parseFloat(cellMedia2.innerHTML) || 
            parseFloat(alunos[i].d3) > parseFloat(cellMedia3.innerHTML) || 
            parseFloat(alunos[i].d4) > parseFloat(cellMedia4.innerHTML) || 
            parseFloat(alunos[i].d5) > parseFloat(cellMedia5.innerHTML)) {
            //Adiciona aluo à tabela de destaques
            var qtdLinhas = tbDestaques.rows.length;
            var linha = tbDestaques.insertRow(qtdLinhas);

            var cellDestaque = linha.insertCell(0);
            cellDestaque.innerHTML = alunos[i].aluno;
        }
    }
}

function exibeAlunosFrequencia() {
    //Busca os alunos inseridos previamente
    var alunos = JSON.parse(localStorage.getItem("dadosAlunos"));
    //Tabela html
    var tbFrequencias = document.getElementById("tbFrequencias");

    for(var i = 0; i <= alunos.length; i++) {
        if(parseFloat(alunos[i].freq) <= 75){
            var qtdLinhas = tbFrequencias.rows.length;
            var linha = tbFrequencias.insertRow(qtdLinhas);
            var cellFreq = linha.insertCell(0);
            cellFreq.innerHTML = alunos[i].aluno;
        }
    }
}



exibeLista();
calculaMedia();
exibeAlunosFrequencia();