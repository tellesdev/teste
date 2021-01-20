const curso = {
  nome: 'Programação em Javascript',
  horas: 25,
  preco: 27.99
}

console.log(curso)

// console.log(typeof (curso))

//console.log(Object.keys(curso))

//console.log(Object.values(curso))

//console.log(Object.entries(curso))

// Object.entries(curso).forEach(par => {
//   console.log(`${par[0]}: ${par[1]}`)
// })


// Object.entries(curso).forEach(([chave, valor]) => {
//   console.log(`${chave}: ${valor}`)
// })

// curso.nome = 'Criação de API com Django Framework'
// console.log(curso)

// Object.defineProperty(curso, 'publicacao',{
//   enumerable: false,
//   writable: false, // Não permite reescrever o código, para deixar ele editavel deixar true
//   value: '04/01/2021'
// })

// curso.publicacao = '05/01/2021'

// console.log(curso)
// console.log(curso.publicacao)

// const outro = {}

// Object.defineProperty(outro, '', {

// })

// Object.freeze(curso);
// curso.nome = 'Dança de salão';

// console.log(curso)

const usuarios = [
  {nome: 'Alice Telles', empresa: 'Geek'},
  {nome: 'Paula Telles', empresa: 'Facebook'},
  {nome: 'Rafa Telles', empresa: 'Google'}
]

// console.log(usuarios)
//console.table(usuarios) // deixa no formato de tabela

console.table(curso)