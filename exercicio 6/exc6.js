// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

function Primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function contagemRegressiva() {
    for (let i = 30; i >= 1; i--) {
        if (Primo(i)) {
            document.write(` [${i}] `);
        } else {
            document.write(`${i} `);
        }
    }
}

contagemRegressiva();