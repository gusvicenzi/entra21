let opcao = "s"
let contador = 5

while(opcao.toLocaleLowerCase() == "s"){
    console.log(contador);
    if(contador==1){
        opcao = "n"
    }
    contador--
}

console.log("Continua executando...");