/**
 * Funçao fabrica
 * tambem conhecica com function factory 
 */

 function fabricar_curso(n, p){
   const descont = 0.90;
   return {
     nome: n,
     preco: (p * descont).toFixed(2)
   }
 }

console.log(fabricar_curso('Programação em Javascript', 27.99))
console.log(fabricar_curso('Criações de API com Django Rest Framework', 35.99))

cursos = []
for(let i = 0; i < 5; i++){
  cursos.push(fabricar_curso(`Curso ${i + 1}`, `${19.99 + i * 3}`))
}
console.log(cursos)