const pessoa = {
    _nome: '',
    _idade: 20,
    get nome() {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18
    },
    set idade(valor) {
        this._idade = valor
    }
}

pessoa.nome = 'leticia campos'
console.log(pessoa.nome)

pessoa.idade = 16
console.log(pessoa.podeDirigir)


// --------------------

const animal = {
    _id: '123',
    _idade: '123',
    get id() {
        return this._id
    },
    set idade(valor) {
        this._idade = valor
    }
}

console.log(animal.id)
animal.idade = 10

console.log(animal.idade)
