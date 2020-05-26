const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual é seu nome?\n', nome => {
//     terminal.question('Qual é seu telefone?\n', telefone => {
//         console.log(
//             `
//             Nome: ${nome},
//             Telefone: ${telefone}
//             `
//         )
//         terminal.close()
//     })
// })

// encapsulando a função questão, e trabalhando com promises
function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ""
let telefone = ""
Promise.resolve()
    .then(() => questionAsync('Qual é seu nome?'))
    .then(respostaNome => {
        if(!respostaNome) throw new Error('campo vazio!')
        nome = respostaNome
    })
    .then(() => questionAsync('Qual é o seu telefone?'))
    .then(respostaTelefone => {
        if(!respostaTelefone) throw new Error('campo vazio!')
        telefone = respostaTelefone
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    })
    .catch(error => {
        console.error(error)
    })
    .finally(() => terminal.close())


