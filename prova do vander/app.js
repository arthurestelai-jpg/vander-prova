import Prestador from './src/models/Prestador.js';

// Criando 2 prestadores
const prestador1 = new Prestador(1, 'Tech Solutions LTDA', '12.345.678/0001-99');
const prestador2 = new Prestador(2, 'Clean Services ME', '98.765.432/0001-11');

// Exibindo os dados
console.log('--- Dados dos Prestadores ---');
console.log(prestador1);
console.log(prestador2);



// Importa a classe Prestador de dentro da pasta src/models/
// new Prestador(...) → cria os objetos (instâncias).
// console.log() → mostra no terminal.



