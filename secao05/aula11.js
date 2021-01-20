/**
 * tratamento de erros com try catch
 */

//  console.log(nome) // ReferenceError

//  console.log('oi...')

//console.log(4.oi())


//Tratamos erros com Try Catch
// try{
//   console.log(nome)
// }catch(e){
//   console.log('Não encontramos a varialve nome')
//   console.log(e.name)
//   console.log(e.message)
// }

// console.log('Oi')

// Lançando erros 
function dividir (num1, num2) {
  if(num1 === 0 || num2 === 0) {
    throw("Os valores devem ser positivos") // lançando uma exceção, ou seja lançando um erro
  } else {
    return num1 / num2
  }
}

try{
  let ret = dividir(8,2)
  console.log(ret)
} catch(e){
  console.log('Não deu certo')
}finally{
  console.log('vamos continuar')
}
