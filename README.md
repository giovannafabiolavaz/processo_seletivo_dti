[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10399697&assignment_repo_type=AssignmentRepo)
# Projeto Seletivo DTI Digital

'Giovanna Fabíola Vaz'

## Objetivo 
Este projeto visa desenvolver um sistema web intuitivo para auxiliar professores na organização e análise das notas e frequências de seus alunos. O sistema permitirá que professores consigam inserir as notas de seus alunos em cinco disciplinas e registrar a frequência de cada um de forma simples e direta. Além disso, será montada uma tabela que apresenta, de forma clara, as notas e a frequência de cada aluno, a média da turma em cada disciplina, o nome dos alunos que ficaram acima da média da turma em alguma disciplina e o nome dos alunos que possuem uma frequência menor que 75%.

## Instruções para executar o sistema
Ao abrir o sistema, é possivel visualizar uma tela que contém três opções de botões com as seguintes funções:
1 - Adicionar aluno: Permite que o professor insira o nome, a nota do aluno em cada uma das 5 disciplinas e a frequência deste aluno nas aulas.
2 - Acessar lista: Permite que o professor visualize os dados de cada aluno, a média da turma em cada disciplina, os alunos que ficaram acima da média e os alunos com frequência inferior a 75%.
3 - Limpar base de dados: Possibilita que o professor apague toda a base de dados inserida anteriormente.
A navegação é fácil e intuitiva, contendo alertas ao usuário para evitar ações desastrosas, como apagar a base de dados por engano. Além disso, a aplicação conta com links que permitem retornar à tela inicial caso o usuário tenha selecionado o botão errado.

## Premissas assumidas
Esta aplicação foi desenvolvida com algumas premissas. Tais como:
1 - Não é possível apagar apenas um aluno. Caso seja selecionada a opção de limpar a base de dados, todos os dados inseridos anteriormente serão excluídos.
2 - Não será possível editar os dados de um aluno.
3 - Será possível visualizar apenas o nome dos alunos que ficaram acima da média em alguma disciplina. Informações sobre a disciplina em que este aluno se destacou não serão exibidas no campo de "Alunos acima da média em alguma disciplina".
4 - Caso o usuário clique em "salvar" após inserir os dados do aluno, não será possível editar ou excluir estes dados. 
5 - Os campos destinados às notas das disciplinas e à frequência aceitam apenas números (inteiros ou com casas decimais). Não é permitida a entrada de caracteres especiais. 

## Decisões de projeto
1 - Tecnologias utilizadas:
* Frontend: Para a construção da interface do usuário, foram utilizados HTML, CSS e JavaScript. A combinação dessas tecnologias garante que a aplicação seja fácil de usar e acessível em diferentes dispositivos.
* Backend: No lado do servidor, foi utilizado JavaScript. Esta escolha permite uma integração fluida com o frontend e aproveita a mesma linguagem de programação em ambas as camadas. Além disso, os dados inseridos pelo usuário são armazenados em LocalStorage.

2 -  Principais Funcionalidades:
 * Entrada de Dados: O sistema permite a inserção do nome, das notas das cinco disciplinas e da frequência de cada aluno em um formulário simples.
* Cálculos Automáticos: O sistema calcula automaticamente a média geral da turma em cada disciplina e compara a nota de cada aluno com a média geral, retornando os nomes dos alunos que ficaram acima da média.
* Relatórios e Análises: O sistema gera relatórios que listam os alunos com médias acima da média da turma e os alunos com frequência abaixo de 75%.
