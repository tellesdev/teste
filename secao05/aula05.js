/**
 * Filter
 */

var numeros = [1,2,3,4,5,6,7,8,9,10]
//console.log(numeros)
function filtrar_pares(n){
  return n % 2 === 0 ;
}

// console.log(filtrar_pares(3)) // false 
// console.log(filtrar_pares(8))// true

function filtrar_impar(n){
  return n % 2 !== 0 ;
}

function filtrar_multiplos_5(n){
  return n % 5 === 0 ;
}

var ret = numeros.filter(filtrar_pares);
//console.log(ret)

var ret = numeros.filter(filtrar_impar);
//console.log(ret)

var ret = numeros.filter(filtrar_multiplos_5)
//console.log(ret)

var alunos = [
  {nome: 'Alexsander', nota: 8.5},
  {nome: 'Paula', nota: 10},
  {nome: 'Gabriel', nota: 9.2},
  {nome: 'John', nota: 7.3}
];

function filtrar_notas_maiores_8(aluno){
  return aluno.nota > 8;
}
var filtrados = alunos.filter(filtrar_notas_maiores_8)
console.log(filtrados)

function filtrar_notas_menor_8(aluno) {
  return aluno.nota < 8;
}

var menor_nota = alunos.filter(filtrar_notas_menor_8)
console.log(menor_nota)