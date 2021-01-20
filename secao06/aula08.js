/**
 * Funçoes Construtoras
 */

 function Pessoa(n, s, raca = 'Humano'){
   // atributos privados só consiguimos fazer uso dentro da funçao construtora
   let altura = 0.30
   let peso = 0.5
   let idade = 0
   let nome = n
   let sexo = s

   // atributo publico pode ser usado fora da funcao construtora
   this.raca = raca

   // metodo privado so conseguimos fazer uso dentro da funçao construtora
    let imprimir_dados = function(){
      console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`,)
    }

    // metodo publico conseguimos fazer uso fora da funçao construtora
    this.fazer_aniversario = function(){
      idade += 1;
      imprimir_dados()
    }

    this.getIdade = function(){
      return idade;
    }
 }

 const angelina = new Pessoa('Angeila', 'Feminino');
//console.log(angelina) // privado
console.log(angelina.raca)  // publico
console.log(angelina.peso) // privado

angelina.fazer_aniversario() // publico
angelina.fazer_aniversario() // publico

//Instanciar novo objeto
const felicity =  new Pessoa('Felicity', 'Feminino')
felicity.fazer_aniversario() // publico
console.log(felicity.getIdade())

console.log(typeof(Pessoa))// Function
console.log(typeof(felicity)) // Objeto