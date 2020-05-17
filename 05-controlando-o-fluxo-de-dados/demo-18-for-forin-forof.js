const textoPar = 'par'
const textoImpar = 'impar'
// for(let index = 0; index <= 10; index++) {
//     const decisao = index % 2 == 0 ? textoPar : textoImpar
//     console.log(`O numero ${index} é ${decisao}`)
// }

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder: 'Valoz'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Mariazinha',
        superPoder: 'Super força'
    },
]
// console.log(minhaListaDeTarefas)

// for(let index = 0; index < minhaListaDeTarefas.length; index ++) {
//     const item = minhaListaDeTarefas[index]
//     console.log(
//         `
//         id: ${item.id}
//         nome: ${item.nome}
//         `
//     )
// }

// não precisa do contador
// usando o for in
// for(const index in minhaListaDeTarefas) {
//     const item = minhaListaDeTarefas[index]
//     console.log('Nome', item.nome)
// }

// não precisa usar o index
// com o of pega o item especifico
for(const item of minhaListaDeTarefas) {
    console.log('Nome', item.nome)
}
