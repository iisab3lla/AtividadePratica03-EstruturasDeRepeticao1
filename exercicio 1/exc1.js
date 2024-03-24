// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let menorAltura = Infinity;
let maiorAltura = -Infinity;

for (let i = 1; i <= 15; i++){
    let altura = parseFloat (prompt(`Digite a altura da pessoa ${i}: `));  

    if(altura < menorAltura){
        menorAltura = altura;
    }

    if(altura > maiorAltura){
        maiorAltura = altura;
    }
}

document.write(`A menor altura do grupo é: ${menorAltura} metros <br>`);
document.write(`A maior altura do grupo é: ${maiorAltura} metros <br>`);