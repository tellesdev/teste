/** 
 * Funçoes Closures
 */

//  let xuxa = 'global' // pode ser acessada globalmente no nosso programa

//  function imprimir(){
//    console.log(xuxa)
//  }

//  function outra(){
//    let xuxa = 'local' // só pode ser acessada locamente no bloco em contexto
//    imprimir()
//    console.log(xuxa) // local
//  }
// outra(); // Global

// == Outro exemplo

let variavel = 'global'

function externa(){
  let variavel = 'local'

  function interna(){
    return variavel
  }

  return interna;
}
let executa = externa()
 console.log(executa())

 // Estamos estudando Closures que é o contexto léxico de uma função
 // Linguagem de programação Clojure