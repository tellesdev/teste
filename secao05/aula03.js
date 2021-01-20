/**
 * Foreach --> estruturas de repetição
 */

 var cursos = [
   'Programação para leigos',
   'Algoritimos e lógica de programação',
   'Programação e C#',
   'Programação em Java',
   'Programação em Pytoh',
   'Banco de dados',
   'Programação Web com Django Framework',
   'Programação em Javascript',
 ];

//console.log(cursos)
//console.log(cursos.length)

// definir função
function imprimir(curso, indice, array){
  console.log(indice + ' - ' + curso)
  console.log(array)
}
// Para cada elemento dentro do array
//cursos.forEach(imprimir);

// utilização de uma função anonima (lambida/callback) e template string
cursos.forEach(function(curso, indice){
  //console.log(`${indice} - ${curso}`)
})

for(var i = 0; i < cursos.length; i ++){
  console.log(i + ' - ' + cursos[i]);
}