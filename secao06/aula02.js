// First Class Citizens
function somar(num1, num2) {
  return num1 + num2;
}

let res = somar(4, 6)
//console.log(res)

// Exemplo 1
const executar = somar;
//console.log(executar(8,7))


// Exemplo 2
function subtrair(num1, num2) {
  return num1 - num2;
}
function fazAlgo(num1, num2, funcao) {
 return funcao(num1, num2)
}

// console.log(fazAlgo( 5, 5, somar))
// console.log(fazAlgo( 8,3, subtrair))

// Exemplo 3

function outra(z){
  return z;
}

const ret = outra(subtrair);
//console.log(ret(8,2))

/**
 * cidadao de primeira classes
 * first-class citizems
 * Higher-Order Classes
 */

 function mensagem(){
   console.log('Evolua seu lado Geek')
 }
 

// let reto = mensagem();
 //console.log(reto)

 let valores = [1, 3.4, true, somar]
 for(let i = 0; i < valores.length; i++) {
   console.log(typeof valores[i])
 }