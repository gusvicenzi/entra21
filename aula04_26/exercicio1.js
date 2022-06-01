let nome = "Gustavo"
let anoNascimento = 1998
let mesNascimento = 5
let diaNascimento = 12

let anoAtual = 2022
let mesAtual = 4
let diaAtual = 26

let idade = 2022 - anoNascimento;

if (mesAtual < mesNascimento) {
    idade--
} else if (mesNascimento == mesAtual && diaAtual < diaNascimento) {
    idade--
}

console.log("Cálculo idade");
console.log(`A idade de ${nome} é ${idade}`);
