let numeros = [1, 30, 40, 4, 5, 6, 10];

function ordenar(vetor) {
    for (let j = 0; j < vetor.length; j++) {
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] > vetor[i + 1]) {
                let anterior = vetor[i]
                vetor[i] = vetor[i + 1]
                vetor[i + 1] = anterior
            }
        }
    }
    return vetor
}

// console.log(ordenar(numeros).toString());

console.log("______________________ Resolução ______________________");

function ordenar2(vetor) {
    let trocou = true
    while (trocou) {
        trocou = false
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] > vetor[i + 1]) {
                let anterior = vetor[i]
                vetor[i] = vetor[i + 1]
                vetor[i + 1] = anterior
                trocou = true
            }
            // console.log(vetor.toString());
        }
    }
    return vetor
}

console.log(ordenar(numeros).toString());
console.log(numeros.sort((a, b) => a-b ).toString());