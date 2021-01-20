// /**
//  * Var Let Const
//  */

//  var numero = 42
//  //console.log(numero)

//  numero = numero + 18
//  //console.log(numero)

//  // Usando o let
//  let outro_numero = 42;
//  //console.log(outro_numero)

//  outro_numero = outro_numero + 18;
//  //console.log(outro_numero)

//  let nome = 'Geek'
//  //console.log(nome)

//  nome = 'University'
//  //console.log(nome)

//  for(let i = 0; i < 5; i++){
//    let valor = i * 3
//    console.log(valor)
  
//  }
//  //console.log(valor) // ReferenceError
//  //console.log(i)

// let numero = 80
// console.log(numero)

// let numero = 32 // SytanxeError
// console.log(numero)

// === Const ===
const taxa = 1.44
console.log(taxa)

let res = 45 * taxa
console.log(res)

/* TypeError - não é permitido redeclarar uma variavel const.
taxa = 5 
console.log(taxa)
*/

// Contante x Mutação
const curso = {nome: 'Programação em Javascript'}
console.log(curso.nome)
// Não posso alterar o valor de uma constante

// Podemos realizar Mutação em dados contidos na constante
curso.nome = 'Programação em Python'; // Mutação, alterar o atributo da constante
console.log(curso)

/**
 * Dica importante --> Como declarar variáveis em Javascript
 * - A variavel poderá ser alterada? (vai variar?) caso sim use sempre LET
 * - A variavel vai ser constante? (Não vai variar?) caso sim use CONST
 */

 const valor = 5

 for(let i = 0; i < valor; i++) {
   console.log(valor - i)
 }