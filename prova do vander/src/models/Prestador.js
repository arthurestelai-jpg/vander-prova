// export default permite que outros arquivos importem essa classe
export default class Prestador {

  // constructor é o método que roda quando você cria um objeto com new
  // constructor recebe os 3 dados e guarda dentro do objeto (this)
  constructor(id, razao_social, cnpj) {
    
    // Os atributos são id, razao_social e cnpj
    this.id = id;
    this.razao_social = razao_social;
    this.cnpj = cnpj;
  }
}