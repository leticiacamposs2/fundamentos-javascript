// undefined = não foi definido, nunca recebeu um valor
// por boa prática inicializamos uma variavel como null quando nao queremos que ela inicialize com valor

let variavelSemInicializacao

console.log(
    variavelSemInicializacao,
    typeof(variavelSemInicializacao)
)


variavelSemInicializacao = 'Hello world!!'

console.log(
    variavelSemInicializacao,
    typeof (variavelSemInicializacao)
)

variavelSemInicializacao = null

console.log(
    variavelSemInicializacao,
    typeof (variavelSemInicializacao)
)