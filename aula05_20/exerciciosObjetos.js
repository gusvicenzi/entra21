console.log("____________________Exercícios Objetos____________________");

// function produto(descricao, preco, qtde) {
//     New Object({
//         descricao: descricao,
//         preco: preco,
//         qtde: qtde,
//         subTotal: function () {
//             return (this.preco * this.qtde)
//         }
//     }
//     )
// }

console.log("____________________Exercício 1____________________");


let produto1 = {
    descricao: "Café em pó",
    preco: 11.5,
    qtde: 2,
    subTotal: function () {
        return (this.preco * this.qtde)
    }
}

let produto2 = {
    descricao: "Leite em caixa",
    preco: 3.1,
    qtde: 5,
    subTotal: function () {
        return (this.preco * this.qtde)
    }
}

let produto3 = {
    descricao: "Banana",
    preco: 1.99,
    qtde: 3,
    subTotal: function () {
        return (this.preco * this.qtde)
    }
}

let produto4 = {
    descricao: "Cerveja",
    preco: 3.8,
    qtde: 6,
    subTotal: function () {
        return (this.preco * this.qtde)
    }
}

let produto5 = {
    descricao: "Pão de alho",
    preco: 6.79,
    qtde: 10,
    subTotal: function () {
        return (this.preco * this.qtde)
    }
}

const produtos = [produto1, produto2, produto3,produto4, produto5]
console.log(produtos);

function total(array) {
    let resultado = 0;
    for(let i=0; i < array.length; i++){
        resultado += array[i].subTotal()
    }
    return resultado.toFixed(2)
}

console.log(total(produtos));

console.log("____________________Exercício 2____________________");

let numeros = [1, 30, 40, 4, 5, 6, 10];

function maior(vetor){
    let maiorValor = vetor[0]
    for(let i=1; i < vetor.length; i++) {
        if(maiorValor < vetor[i]){
            maiorValor = vetor[i]
        }
    }
    return maiorValor
}

function menor(vetor){
    let menorValor = vetor[0]
    for(let i=1; i < vetor.length; i++) {
        if(menorValor > vetor[i]){
            menorValor = vetor[i]
        }
    }
    return menorValor
}

console.log(maior(numeros));
console.log(menor(numeros));