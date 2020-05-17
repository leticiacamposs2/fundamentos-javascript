// require(readline) // dessa forma eu pego dos modulos internos do nodejs
// require(./readline) // dessa forma eu pego de um arquivo local indicado

const Matematica = require('./matematica')
// console.log(Matematica.somar(1, 4))
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// primeiro valor do cliente e depois o segundo valor, por isso 2 funcoes
terminal.question('Insira o primeiro valor\n', valor1 => {
    terminal.question('Insira o segundo valor\n', valor2 => {
        terminal.question('Insira a operação\n', tipoOperacao => {
            const resultado = Matematica[tipoOperacao](
                Number(valor1), Number(valor2)
            )
            console.log(
                `A operação ${tipoOperacao} de ${valor1} e ${valor2} é ${resultado}`
            )
            terminal.close()
        })
    })
})

// a classe no fim de tudo é convertida para objeto
// para acessar o objeto usar ponto ou colchetes
// Exemplo: console.log(Matematica['somar'], Matematica['multiplicar'])

