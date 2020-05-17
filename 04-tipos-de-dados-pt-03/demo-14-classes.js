class Heroi {
    atacar() {
        console.log(`atacou!!`)
    }
    defender() {
        console.log(`defendeu`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// ----------------------------------------------------

// usando constructor
// this é no contexto do escopo da classe

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    atacar() {
        console.log(`
            O ${this.nome} atacou !!`)
    }
}

const heroi2 = new Heroi2(
    `Flash`, 80
)
heroi2.atacar()

// ----------------------------------------------------

// Podemos usar a função na classe sem a palavra function que vai sempre olhar para o this
// Para usar o this, é necessário ter ela vazia la
// Mas se não precisar usar o this, pode usar o static
// Dessa forma ele não faz parte das propriedades da minha classe
// essas funções na programação são chamadas de helpers ou funcoes utils que não envolva nada
// do meu contexto atual
// executando essa funcao eu nao preciso usar o new
// lembrete: o static são para valores que não se alteram, é criado dentro da função e morre logo após a criação

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 - idade
    }
}

const anoNascimento = Heroi3.obterAnoNascimento(26)
console.log(
    `O ano de nascimento do Heroi é ${anoNascimento}`
)
