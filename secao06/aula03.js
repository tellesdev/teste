/**
 * Parâmetros em funções
 */

 function calulcar_idade_1(ano_nascimento){
   const data = new Date(); //Gera a data atual

   const idade = data.getFullYear() - ano_nascimento;

   return idade;
 }

function calulcar_idade_2(ano_nascimento){
  const data = new Date(); 
  const idade = data.getFullYear() - ano_nascimento;
  console.log(idade);
}

let ret = calulcar_idade_1(1978);
// console.log(ret + 2);

// calulcar_idade_2(1978)
const data = new Date(); 
// console.log('Data Completa ' + data)
// console.log('Ano ' + data.getFullYear())

// console.log('Mes ' + data.getMonth())

// ==> Fique esperto 

function somar(num1, num2){
  return num1 + num2;
}
console.log(somar(4,6))

console.log(somar(4))
console.log(somar(4, 6, 8))

console.log(somar(4, 6, 8, 3, 2, 1, 19))