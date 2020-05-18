const fs = require('fs')
// verifica no sistema operacional se o arquivo existe, se nao retorna o erro
fs.readFile('./arq1.txt', (error, resposta) => {
    if (error) {
        console.error('Deu ruim', error.stack)
        return;
    }

    //deve retornar um buffer
    console.log('resposta', resposta.toString())
})

