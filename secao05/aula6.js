/**
 * Reduce
 */

 var precos = [4.66, 3.78, 9.78, 1.34, 5.32]
console.log(precos)
var soma = 0

 for(var i = 0; i < precos.length; i++){
   soma = soma + precos[i]
 }
 //console.log(soma)

 soma = 0

 precos.forEach(function(valor){
   soma += valor // soma = soma + valor
 })
//console.log(soma)

function somar(anterior, atual){
  return anterior + atual
}

var ret = precos.reduce(somar)
// console.log(ret)

/**
 * como funciona o reduce?
 * [ 4.66, 3.78, 9.78, 1.34, 5.32 ]
 * 
 * Primeira execução
 *  - Pega os dois primeiros valores do indice, soma e retorna o valor;
 *  - Nas demais execuções pegar o valor anterior e o proximo valor (indice 2...)
 *  - Ex.: 
 *      1 -> 4.66 + 3.78 = 8.44 
 *      2 -> 8.44 + 9.78 = 18.22 
 *      3 -> 18.22 + 1.34 = 19.56 
 *      4 -> 19.56 + 5.32 = 24.88 
 */

 // Exemplo de map/reduce

 function adicionar_taxa(valor){
   return valor + 5
 }
 var ret = precos.map(adicionar_taxa).reduce(somar)
//  console.log(ret)


//exemplo filter/map/reduce

function preco_maior_4(valor){
  return valor > 4
}

ret = precos.filter(preco_maior_4).map(adicionar_taxa).reduce(somar)
console.log(ret)