
// // Função nomeada
// function boaNoite(nome="Usuário") {
//     console.log(`Boa noite ${nome}`);
// }

// boaNoite()
// boaNoite("Gustavo")

// // Função anônima arrow
// let bomDia = (nome="Usuário") => console.log(`Bom dia ${nome}`);

// bomDia()
// bomDia("Jaime")

function IMC(altura, peso) {
    return parseFloat((peso/altura**2).toFixed(1))
}

function classificacaoIMC(IMC) {
    if (IMC<18.5){
        return ("Peso baixo")
    } else if (IMC<24.9){
        return ("Peso normal")
    } else if (IMC<29.9){
        return ("Sobrepeso")
    } else if (IMC<34.9){
        return ("Obesidade Grau 1")
    } else if (IMC<39.9){
        return ("Obesidade Grau 2")
    } else if (IMC>= 39.9){
        return ("Obesidade Grau 3")
    } else {
        return "Valor inválido"
    }
}

// let imcGu = IMC(1.7, 65)
// console.log(imcGu);
// console.log(classificacaoIMC(imcGu));
// let x = () => {}

// const array = ["Audi", "VW", "BMW", "Porsche"]
// array.push("Mercedes-Benz");
// console.log(array);

// const frutas = ["Maçã", "Uva", "Pêra", "Laranja"]
// frutas.forEach(fruta => console.log(fruta))
// let teste = frutas.filter(fruta => {
//     return fruta.length <= 3
// })
// console.log(teste);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(
    numeros.reduce( (numeroAnterior, numeroAtual) => {
        return numeroAnterior+numeroAtual
    })
);

function sumArray(array) {
    return (array.reduce( (numeroAnterior, numeroAtual) => {
        return numeroAnterior+numeroAtual
    }))
}
console.log(sumArray(numeros));

function somaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}
console.log(somaArray(numeros));
