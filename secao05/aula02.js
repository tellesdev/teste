// Aprendendo Array com Javascript (Vetores, Matrizes)

/**
 * array contendo 5 elementos -> = 5
 * índices -> posição do elemento no array
 * [0][1][2][3][4]
 * 
 * Valorem em um array
 * 0    1   2   3   4 -> posições dos elementos
 * [12][24][36][48][52] -> valores
 * 
 * Array --> possue tamano infinito, 
 * podendo colocar qualquer tipo de dados
 * 
 */

 //Forma 1 -> para criar array
 var alunos = new Array('Paula', 'Samuel', 'Gabriel', 'Rafaella', 'Alexsander')
 // var alunos = ['Paula', 'Samuel', 'Gabriel', 'Rafaella', 'Alexsander']; --> Forma recomendada
 //console.log(alunos)

 // Forma 2 --> Recomendada a usar
 var notas = [1, 3, 5, 7, 9]
 //console.log(notas)

 // Criando um Array Vazio
 var dados = [];
 //console.log(dados)

 // Fazendo acesso ao valor de um índice
 //console.log(notas[2])

 // Alterando o valor a partir do índice
 notas[2] = 12;
 //console.log(notas)

 // Atenção ao acessar um valor com um índice que não existe
 notas[9] = 10;
 // console.log(notas)

 if(notas[5] == undefined) [
  notas[5] = 54
]

//  console.log(notas[5]) // 54
//  console.log(notas[6]) // undefined
//  console.log(notas[7]) // undefined
//  console.log(notas[8]) // undefined
//  console.log(notas[9]) // 10

//  console.log(notas[5] == undefined) // false

 // Inserindo elementor ao final do array

 //var nomes = ['Paula', 'Samuel', 'Gabriel']
 //console.log(nomes)

 //nomes.push('Pedro') // Comando push inseri um valor no final do array
 //console.log(nomes)

 // Tamanho do Array
 //console.log(nomes.length)
 //var tam = nomes.length // Length retorna o tamanho
// console.log(tam)

// Ordenar os dados do array

var alunos = [ 'Paula', 'Samuel', 'Gabriel', 'Miguel', 'Ana', 'Carolina']
//console.log(alunos)

alunos.sort(); // Ordenar array de strings
//console.log(alunos)

//var precos = [ 123.55, 29.44, 323.44, 991.12]
//console.log(precos)

//precos.sort(function(a, b) {return a - b}); // Maniera correta para ordenar
//console.log(precos)

//precos.sort(); //ATENÇÃO --> ORDENAÇÃO DE FLOAT NÃO FUNCIONA ASSIM
//console.log(precos)

var idades = [5, 1, 8, 12, 44, 78]
//console.log(idades)

idades.sort(function(a,b){return a - b}) // Maniera correta para ordenar
//console.log(idades)
//idades.sort(); //ATENÇÃO --> ORDENAÇÃO DE INTS NÃO FUNCIONA ASSIM
//console.log(idades)


// Deletando dados de um Array
//delete idades[3]; // vai gerar um valor undefined
//console.log(idades)

//idades[3] = 12
//console.log(idades)

//idades.splice(3, 1); // a parti do indice 3 delete um elemento
//console.log(idades)

//idades.splice(3, 0, 56, 89) // Apartir do indice 3, nao delete nenhum e adicione 56 e 89
//console.log(idades)

//idades.splice(3, 1, 23)// A partir do indice 3, deleta 1 e add 23
//console.log(idades)

// iterar em um array
// for(var i=0; i < idades.length; i++){
//   //console.log(idades[i])
// }
//Removendo elementos da ultima posiçao do array
// idades.pop() // remove e retorna o ultimo elemento de um array
// console.log(idades)

// var ret = idades.pop()
// console.log(ret)
// console.log(idades)


//Removendo o primeiro elemento de um array

// idades.shift();//remove e retorna o ultimo elemento de um array
// console.log(idades)

// var ret = idades.shift();
// console.log(ret)
// console.log(idades)


// Inserir elemento no inicio do array

// idades.unshift(99);
// console.log(idades)

// retorna um novo array a partir do indice informados
//  var novo = idades.slice(3)
//  console.log(novo)

// var novo = idades.slice(1,2)// a partir do indice 1, pegue ate o indice 2 sem incluir
// console.log(novo) 

var pares = [2, 4, 6, 8, 10];
var impares = [1,3,5,7,9];

var rest = pares.concat(impares); //concatena os dois arrays
//console.log(rest)

rest = impares.concat(pares)
//console.log(rest)

rest.sort(function(a, b) {return a - b}) // colocae em ordem
//console.log(rest)


// 4 x 4

var tabuleiro = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
/**
 * [
 *  [1, 2, 3, 4] -> linha 0
 *  [5, 6, 7, 8] -> linha 1
 *  [9, 10, 11, 12] -> linha 2
 *  [13, 14, 15, 16] -> linha 3
 * ]
 */

//console.log(tabuleiro)
console.log(tabuleiro[0][0]) // linha 0 coluna 0 -> 1
console.log(tabuleiro[2][2]) // linha 2 coluna 2 -> 11