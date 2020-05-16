const podeDirigir = true
if (podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 1
if (!saldoEmConta) {
    console.log('Não tem saldo!')
}

const boolComString = 'Ae Hackerzão!'

// !! pega o valor e transforma em true ou false
console.log('!!boolComString', !!boolComString)

// negação
console.log('!boolComString', !boolComString)

// negação + forçar com o boolean (executa primeiro no parenteses depois o de fora)
console.log(
    'negação + forçar a booleano',
    ! (!!boolComString)
)
