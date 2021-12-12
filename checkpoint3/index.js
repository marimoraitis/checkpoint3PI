/*  
*Passo 1 (1,5 pontos)*
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. 
-----------------------------CONCLUÍDO
*Passo 2 (1,5 pontos)*
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
-----------------------------CONCLUÍDO
*Passo 3 (1,5 pontos)*
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
-----------------------------CONCLUÍDO

*Passo 4 (1,5 pontos)*
Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
-----------------------------CONCLUÍDO
*Passo 5 (2 pontos)*
Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
-----------------------------CONCLUÍDO
*Passo 6 (2 pontos)*
Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
-----------------------------CONCLUÍDO

*/
//Criação do objeto aluno
let alunos = {
    nome: "",
    qtdFaltas: 0,
    notas: [],
  };
  // Criação da função construtora
  
  function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.faltas = function() {
      this.quantidadeFaltas += 1;
    },
      this.calcularMedia = function() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
          soma += this.notas[i];
        }
  
        return soma / this.notas.length;
      }
  }
  
  // Criação de Usuários
  const aluno1 = new Aluno("Lucas", 3, [10, 8, 6, 7]);
  const aluno2 = new Aluno("Roberta", 8, [9, 2, 3, 6]);
  const aluno3 = new Aluno("Carla", 14, [10, 2, 1, 1]);
  const aluno4 = new Aluno("Rodrigo", 2, [6, 5, 5, 5]);
  const aluno5 = new Aluno("Irineu", 18, [8, 8, 4, 7]);
  const aluno6 = new Aluno("Suellen", 23, [9, 3, 4, 5]);
  const aluno7 = new Aluno("Maria", 3, [8, 8, 8, 5], 0);
  const aluno8 = new Aluno("Matheus", 8, [10, 5, 6, 9]);
  const aluno9 = new Aluno("Claudiomar", 25, [10, 7, 7, 7]);
  const aluno10 = new Aluno("Sara", 00, [10, 8, 6, 7]);
  
  var curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 6,
    faltasMaximas: 20,
    listaEstudantes: [
      aluno1,
      aluno2,
      aluno3,
      aluno4,
      aluno5,
      aluno6,
      aluno7,
      aluno8,
      aluno9,
      aluno10,
    ],
    novoEstudante: function(estudante) {
      this.listaEstudantes.push(estudante);
    },
    aprovacao: function(user) {
      let media = user.calcularMedia();
      let resultado = false;
  
      if ((user.qtdFaltas < this.faltasMaximas && media >= this.notaAprovacao) ||
        (user.qtdFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1))
      ) {
        resultado = (this.notaAprovacao + true);
      }
  
      return resultado;
    }
  }
  
  console.log(curso.aprovacao(aluno10))
  console.log(curso.aprovacao(aluno1))
  console.log(curso.aprovacao(aluno2))
  console.log(curso.aprovacao(aluno4))
  