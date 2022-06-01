const frutas = ["uva", "limão", "acerola"]
console.log(frutas.toString());     //imprime vetor

frutas.pop()        //remove ultimo item do vetor
console.log(frutas.toString());

frutas.push("kiwi")     //adiciona item no final do vetor
console.log(frutas.toString());

frutas.shift()      //remover item no inicio do vetor
console.log(frutas.toString());

frutas.unshift("banana")        //adiciona item no inicio do vetor
console.log(frutas.toString());

frutas.splice(1,1)        //remove itens no meio do vetor splice(index inicio, qtd de items)
console.log(frutas.toString());

console.log("___________________Splice_____________________");


const carnes = ["costela", "alcatra", "maminha"]
console.log(carnes.toString());

delete carnes[2]        //apaga o item i do vetor, mas não remove o a posição
console.log(carnes.toString());

carnes.push("mortadela")
console.log(carnes.toString());

carnes[2] = "maminha"
console.log(carnes.toString());

carnes.splice(2,1)          //remover 1 itens a partir da posição 2 do vetor
console.log(carnes.toString());

carnes.splice(1,0, "linguiça", "pão de alho")      //adicionar itens na posição i do vetor
console.log(carnes.toString());

console.log("____________________Objetos____________________");

let pessoa = {
    nome: "Gustavo",
    sobrenome: "Vicenzi",
    email: "gusvicenzi12@gmail.com",
    habilidades: ["programação", "fps", "tiro"]
}

console.log(pessoa);
console.log(pessoa.habilidades);
console.log(pessoa.habilidades[1]);

let carro = {
    marca: "VW",
    modelo: "Golf GTi",
    motor: "EA888 2.0 turbo",
    placa: "MGX-1205",
    cor: "vermelho",
    eficiencia: (km, abastecimento) => {
        console.log(`km/L: ${(km/abastecimento).toFixed(2)}`);
    }
}

console.log(carro);
console.log(carro.placa);

carro.cor = "preto"

console.log(carro)
carro.eficiencia(500,40)
