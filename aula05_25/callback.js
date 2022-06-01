
function um() {
    console.log("um");
}

function dois() {
    console.log("dois");
}

um()
dois()

function mostraResultado(result) {
    console.log(`Resultado: ${result}`);
}

function mostraResultado2(result) {
    console.log(`Resultado2: ${result.toFixed(2)}`);
}


function soma(n1, n2) {
    let resultado =  n1 + n2
    mostraResultado(resultado)
}

soma(10,20)

// Função usando callback


function soma2(n1, n2, callback) {
    let resultado =  n1 + n2
    callback(resultado)
}

setTimeout(() => {
    soma2(20,20, mostraResultado2)
}, 1000);

soma2(10,10, mostraResultado)
soma2(10,10, mostraResultado2)
