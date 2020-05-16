const pokemon = [
    'Bulbassaur',
    'Pikachu',
    'Squirtle',
    'Charmander'
]

[0] === 'Bulbassaur'
[1] === 'Pikachu'
[2] === 'Squirtle'
[5] === undefined

// -----------------

const minhaLista = []
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

// console.log(minhaListaDeTarefas[0])
// console.log(minhaListaDeTarefas[1])
// console.log(minhaListaDeTarefas[4])

//quantidade de itens no array
// console.log(minhaListaDeTarefas.length)

// adicionar item no final da lista
minhaListaDeTarefas.push('formatar computador')
// console.log(minhaListaDeTarefas);

// remover ultimo da lista
// const ultimo = minhaListaDeTarefas.pop() //pego o valor removido na variavel ultimo
// console.log(ultimo, minhaListaDeTarefas)

// remover o primeiro da lista
// const primeiro = minhaListaDeTarefas.shift() //pego o primeiro valor removido da lista
// console.log(primeiro, minhaListaDeTarefas)

// remover um item especifico a partir de um indice
// console.log(minhaListaDeTarefas[2])
// qual item de inicio
// quantos remover
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]

// verificar o array
// console.log(typeof(itens))

console.log(Array.isArray(itens)) // essa é a forma corretar de verificar se o retorno é um array

// ordernar
// const numeros = [ 3, 2, 1, 0]
// console.log(numeros.sort())

// juntar dois arrays
// const novoArray = itens.concat([4, 5, 6])
// console.log(novoArray)

// console.log(itens.join('---')) // 1---computador---0.22

// verificar indice/posicao do item no meu array
// const index = itens.indexOf('computador')
// console.log(index)

// const index = itens.indexOf('chaves')
// console.log(index) // -1

const index = itens.indexOf('computador')
console.log(itens[index])