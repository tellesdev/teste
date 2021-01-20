// forma 1

// function somar(num1, num2){
//   return num1 + num2;
// }
// console.log(somar(6, 4));

// // forma 2
// let somar2 = function(num1, num2){
//   return num1 + num2;
// }
// console.log(somar2(4, 6))

// // forma 3
// let somar3 = somar;
// console.log(somar3(4,6))

// Arrow Function
let somar4 = (num1, num2) => {
  return num1 + num2;
}
console.log(somar4(4,6))

/**
 *  ==> Atenção caso a sua função tenha apenas um parametro de entrada 
 * e execute apenas uma linha, você pode simplificar ainda mais usando Arrow Function
 */

 const dobrar = valor => valor * 2;
 console.log(dobrar(5))

 function mensagem(){
   console.log('evolua seu lado')
 }
mensagem()

const msg = () => console.log('Evolua seu lado GEEK')
msg()