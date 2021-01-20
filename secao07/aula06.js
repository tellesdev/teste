class Pessoa {
  constructor(nome, sobrenome){
    this._nome = nome;
    this._sobrenome = sobrenome;
  }

  get nome(){
    return this._nome;
  }
  set nome(nome){
    this._nome = nome;
  }

  get sobrenome(){
    return this._sobrenome;
  }
  set sobrenome(sobrenome){
    this._sobrenome = sobrenome;
  }

  falar(msg){
    console.log(`${this.nome} esta falando a mensagem: ${msg}`)
  }

  comer(){
    console.log(`${this.nome} esta comendo...`)
  }

  beber(){
    console.log(`${this.nome} ${this.sobrenome} esta bebendo...`)
  }
}

class Carro {
  constructor(modelo){
    this._marca = 'Honda';
    this._modelo = modelo;
  }

  get marca(){
    return this._marca;
  }

  get modelo(){
    return this._modelo;
  }

  set modelo(modelo){
    this._modelo = modelo;
  }

imprimir(){
  console.log(`${this.marca} ${this.modelo}`);
  }
}
// === Instanciação de objetos - Forma 1
// const curso = new Object();
// curso.nome = 'Programação em Javascript';
// curso.preco = 27.99;

// console.log(curso);

// curso['qtd_alunos'] = 999;
// console.log(curso);

// delete curso['qtd_alunos']
// delete curso['preco']
// console.log(curso);

// === forma 2 - objeto literal
const programa = {  
  nome: 'Photoshop',
  preco: 899.99,
  fabricante: {
    nome: 'Adobe',
    contato: 'contact@adobe.com',
    endereco: {
      rua: 'Da paz, 45',
      bairro: 'Nova Lima',
      cidade: 'São Paulo'
    },
    filiais: [
      {cidade: 'Rio de Janeiro'},
      {cidade: 'Recife'}
    ]
  },

}
//console.log(programa);

// console.log(programa.nome)
// console.log(programa.fabricante.nome)
// console.log(programa.fabricante.filiais.length)
// console.log(programa['fabricante']['filiais'].length)

// programa.nome = "playstation OS"
// // console.log(programa.nome)
// // console.log(programa)

// delete programa.fabricante.filiais
// console.log(programa.fabricante.filiais) // undefined
// console.log(programa.fabricante.filiais.length) // typeError

// === forma 3 - Objeto literal

//const pessoa = {};
//console.log(typeof(pessoa))
// pessoa.nome = 'Longarina'
// console.log(pessoa)

// === Forma 4 - usando uma funcao construtora

// function Lampada(cor){
//   this.cor = cor;
// }

// const l1 = new Lampada('Branca');

// console.log(l1)
// console.log(typeof(l1))

// === Forma 5  - Objeto apartir das nossas classes

// const p1 = new Pessoa('Felicity', 'teste');
// console.log(p1)
// console.log(typeof(p1))
// console.log(p1.nome)
// console.log(p1.sobrenome)

// p1.nome = ' Xuxa'
// console.log(p1)

// p1.falar(' hj e o dia de aprender JS')
// p1.comer()
// p1.beber()

const fit = new Carro(' fit')
fit.imprimir()