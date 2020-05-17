// usando function
function minhaFuncao1(parametro1) {
    return `aeeeee`
}

// usando const
const minhaFuncao2 = function(parametro1) {
    return `aeee ${parametro1}`
}

// usando arrow function
const minhaFuncao3 = (parametro1) => {
    return `aeeee ${parametro1}`
}

// usando arrow function sem quebrar linha
const minhaFuncao4 = parametro1 => `aeeee ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `aeee ${parametro1}`
}

obj1.minhaFuncao('test')

// sem a palavra function
const obj2 = {
    minhaFuncao(parametro1) {
        return `aeee ${parametro1}`
    }
}

obj2.minhaFuncao('test')
