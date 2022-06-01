function ola() {
    console.log('olá');
}

function tchau() {
    console.log('tchau');
}

function conversa() {
    console.log('Tudo bem?');
}

function testeSetTimeout(callback) {
    setTimeout(callback, 2000)
}
// invocar função
ola()
testeSetTimeout(conversa)
tchau()
