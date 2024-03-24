// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let alturaPedro = 1.50;
let alturaLucas = 1.10;

const taxaCrescimentoPedro = 0.02;
const taxaCrescimentoLucas = 0.03;

let anos = 0;

while (alturaLucas <= alturaPedro) {
    alturaPedro += taxaCrescimentoPedro;
    alturaLucas += taxaCrescimentoLucas;
    anos++;
}

document.write(`A - Serão necessários ${anos} anos para Lucas e Pedro terem o mesmo tamanho! <br>`);

alturaPedro = 1.50;
alturaLucas = 1.10;
anos        = 1;

while (alturaLucas < alturaPedro) {
    alturaPedro += taxaCrescimentoPedro;
    alturaLucas += taxaCrescimentoLucas;
    anos++; 
}

document.write(`B - Serão necessários ${anos} anos para Lucas ser maior que Pedro!`);