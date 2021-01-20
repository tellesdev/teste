/**
 * Herança
 * - Funcionarios
 *    - nome,
 *    - sobrenome,
 *    - email,
 *    - cpf
 *    - função
 *    - registro
 * 
 *  - Clientes
 *    - nome,
 *    - sobrenome,
 *    - email,
 *    - cpf,
 *    - renda
 * 
 *  - Funções
 *    - descrição
 *    - salario
 * 
 */

class Funcao{
  constructor(descricao, salario){
    this._descricao = descricao
    this._salario = salario
  }
  get descricao(){
    return this._descricao;
  }
  set descricao(descricao){
    this._descricao = descricao;
  }

  get salario(){
    return this._salario;
  }
  set salario(salario){
    this._salario = salario;
  }
}

class Pessoa{
  constructor(nome, sobrenome, email, cpf){
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._email = email;
    this._cpf = cpf;
  }
  get nome(){
    return this._nome;
  }
  set nome(nome){
    this._nome = nome
  }
  get sobrenome(){
    return this._sobrenome;
  }
  set sobrenome(sobrenome){
    this._sobrenome = sobrenome;
  }

  get email(){
    return this._email;
  }
  set email(email){
    this._email = email;
  }

  get cpf(){
    return this._cpf;
  }
  set cpf(cpf){
    this._cpf = cpf;
  }

  // Metodos extras
  get nome_completo(){
    return this._nome + ' ' + this._sobrenome
  }
  set nome_completo(nome_completo) {
   nome_completo = nome_completo.split(' ');
   this._nome = nome_completo.shift();
   this._sobrenome = nome_completo.join(' ');
  }
}

class Funcionario extends Pessoa{
  constructor(nome, sobrenome, email, cpf, funcao, registro){
    super(nome, sobrenome, email, cpf);
    this._funcao = funcao;
    this._registro = registro;
  }
  get funcao(){
    return this._funcao;
  }
  set funcao(funcao){
    this._funcao = funcao;
  }

  get registro(){
    return this._registro;
  }
  set registro(registro){
    this._registro = registro;
  }
}

class Cliente extends Pessoa{
  constructor(nome, sobrenome, email, cpf, renda){
    super(nome, sobrenome, email, cpf)
    this._renda = renda;
  }
  get renda(){
    return this._renda;
  }

  set renda(renda){
    this._renda = renda;
  }
}

const c1 = new Cliente('Felicidade', 'Mora aqui', 'felicidade@alegria.com', '123.456.789-00', 7899.99)
const c2 = new Cliente('Alegria', 'Mora aqui', 'alegria@alegria.com', '444.456.789-00', 7899.99)

console.log(c1)
console.log(c2)
console.log(c1.nome_completo)
console.log(c2.nome_completo)

c1.nome_completo = 'Xuxa Meneguel loca'
console.log(c1)