let frutaExistenteNoMercado = false
let temCPUSuficiente = true

// 
// obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]
// console.log('args', args)
console.log('saldo', saldo)

if (isNaN(saldo)) {
    console.log('valor invalido!!')
    return;
}

let tipoCliente = 'premium'
if (saldo < 9) {
    tipoCliente = 'basic'
}
else if (saldo >= 10 && saldo < 20) {
    tipoCliente = 'gold'
}
else {
    tipoCliente = null
}

// null, undefined, vazia, 0 === false!
if(!tipoCliente) {
    tipoCliente = 'indefinido'
}

console.log('tipoDoCliente', tipoCliente)

const operadorOu = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1==1)

const idade = 18
const resultado = idade >= 18 ? 'pode dirigir' : 'nao pode dirigir!!'
console.log('resultado: ', resultado)
