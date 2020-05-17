// date começa com zero
// as data no JS sempre começa de 1970 até hoje

// meses começam do zero
const dataAniversario = new Date(2020, 0, 20)
// console.log(dataAniversario)

const primeiraDataDoJS = new Date(0) //2020-01-20T02:00:00.000Z
// console.log(primeiraDataDoJS) //1970-01-01T00:00:00.000Z

const hoje = new Date()
// console.log(hoje.toString()) //Sat May 16 2020 20:42:37 GMT-0300 (GMT-03:00)
// console.log(hoje.toLocaleDateString())


// formato global recomendado!
// console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5) // +5 dias depois de hoje
hoje.setHours(10, 30, 0)

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)

console.log(
    new Date(2020, 1, 20) > new Date(2020, 3, 20)
)


