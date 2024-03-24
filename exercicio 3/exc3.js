// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6

let multiplicando = Number (prompt('Insira o número que deseja fazer a tabuada'));
let numero = Number (prompt('Insira até qual número deseja fazer a tabuada'));

for (let i = 1; i <= numero; i++){
    resultado = i * multiplicando;
    document.write(`${i} * ${multiplicando} = ${resultado} <br>`);
}