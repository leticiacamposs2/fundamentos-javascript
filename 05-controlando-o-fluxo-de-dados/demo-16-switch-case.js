// criando menu de seleção de forma menos verbosa
// usamos o require para pegar uma classe que já existe no Node.js é para capturar eventos no caso o que o usuario esta digitando

const readLine = require('readline')
const terminal = readLine.createInterface({
    // definir o modo de entrada via terminal
    input: process.stdin,
    // todo texto de saída sairá no terminal
    output: process.stdout
})

// texto do menu
const textoMenu = `
    Olá, seja bem vindo ao sistema de média
    Digite 1 para acessar o menu inicial
    Digite 2 para acessar o menu de Herois
    Digite 3 para acessar o menu de Guerreiras
    Digite 0 para sair
`
console.log('textoMenu', textoMenu)

// terminal.question('Qual é seu nome?', (msg) => {
//     console.log('você escreveu', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'submenu! Pressione enter para selecionar mais opções...',
        fn: opcao1
    }
}
function opcao1(msg) {
    console.log('Não há mais opções!')
    terminal.close()
}
function menuInicial(msg) {
    const opcao = Number(msg)
    if(isNaN(opcao)) {
        throw new Error('Não é um número', msg)
    }
    switch(opcao) {
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        case 1:
            console.log('menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('opcao invalida')
            terminal.close()
            break;
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)

