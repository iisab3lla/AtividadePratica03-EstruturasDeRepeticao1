// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let soma = 0;
let qtdePositivos = 0;
let qtdeNegativos = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número:`));
    
    soma += numero;
    
    if (numero > 0) {
        qtdePositivos++;
    } else if (numero < 0) {
        qtdeNegativos++;
    }
}
let media = soma / 10;

let percentualPositivos = (qtdePositivos / 10) * 100;
let percentualNegativos = (qtdeNegativos / 10) * 100;

document.write(`A média aritmética dos valores lidos é: ${media} <br> <br>`);
document.write(`Quantidade de valores positivos: ${qtdePositivos} <br> <br>`);
document.write(`Quantidade de valores negativos: ${qtdeNegativos} <br> <br>`);
document.write(`Percentual de valores positivos: ${percentualPositivos}% <br> <br>`);
document.write(`Percentual de valores negativos: ${percentualNegativos}% <br> <br>`);