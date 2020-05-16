const pessoa = 
{
    id: '0011AABBCC',
    nome: 'Xuxa da Silva',
    idade: 40,
    dataNascimento: new Date(2000, 6, 1),
}

// console.log(pessoa.id)
// console.log(pessoa['nome'])
// console.log(pessoa['nomeDaMae'] = 'Maria da Silva')

// -------------------

const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

// console.log('nome', heroi.nome)
// console.log('idade', heroi['idade'])
// console.log('sexo', heroi['sexo'])
// console.log('naoExiste', heroi.naoExiste)
// heroi.id = 0001
// console.log(heroi)

// imprimo as chaves do meu objeto //[ 'nome', 'idade', 'sexo' ]
// console.log(Object.keys(heroi))

// saber valores // [ 'Flash', 100, 'Masculino' ]
// console.log(Object.values(heroi))

novaPessoa = {
    tamanho: '10 metros'
}

//juntas dois objetos
const novoObj = Object.assign(heroi, novaPessoa)

console.log(novoObj)
delete novoObj.nome
console.log(novoObj)
// por convenção e padrão não alterar o objeto original e sempre criar um novo usando o assign

