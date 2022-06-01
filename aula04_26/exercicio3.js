// Solução 1 (simples)
let nome = "Gustavo"
let nota1 = 6
let nota2 = 8
let nota3 = 8
let media = (nota1+nota2+nota3)/3
let situacao = "aprovado"
if (media < 7) {
    situacao = "reprovado"
}
console.log(`${nome}, sua média é ${media.toFixed(2)}. Você está ${situacao}`);
// Solução 2 (usando array e for)
let notas = [nota1, nota2, nota3, 10, 2, 3]
let somaNotas = 0
let situacao2 = "aprovado"

for(let i = 0; i < notas.length; i++){
    somaNotas = somaNotas + notas[i] 
}
let mediaNotas = somaNotas/notas.length

if (mediaNotas < 7) {
    situacao2 = "reprovado"
}
console.log(`${nome}, sua média é ${mediaNotas.toFixed(2)}. Você está ${situacao2}`);