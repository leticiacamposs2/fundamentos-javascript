# 🤯 Tipo de dados em Javascript - parte 3
Como interceptar quando alguém acessar o meu objeto? Ou tenta inserir um novo valor para esse objeto?
Nesse caso se pode utilizar modificadores de acesso ou métodos acessores de objetos get/set

----

````
const pessoa = {
    _nome: "",
        get nome() {
        return this._nome
    },
    set nome(n) {
        this._nome = n.toUpperCase()
    },
}

pessoa.nome = 'joselita do céu'
````

----

## 🎓 Aprendizagem

- [x] Conhecendo os métodos assessores get/set de objetos
- [x] Demonstração: conhecendo objetos globais pré-definidos
- [x] Demonstração: Trabalhando com datas
- [x] Funções em javascript
- [x] Formas de declarar uma função: expressão, declarativa e arrow function
- [x] Trabalhando com classes
- [x] Demonstração: Trabalhando com classes

---

## Convenção dos desenvolvedores javascript

- Sempre que declarar uma variavel private deixá-la com um underline (_) na frente do seu nome, exemplo: `_nome`

---

## Entendendo classes

Representação de Piloto:

````

Dados:

Nome = José da Silva
Data de nascimento = 01/05/1972
Tempo de voo = 10 anos
Tem permissão para voar = Não

````

````
Objeto:

const piloto = {
    nome: 'José da silva',
    nascimento: 01/05/1972,
    tempoVoo: '10 years',
    permissaoVoo: false
}

````

Acessos:

pilotar()

dormir ()

acordar()

tomarUnsDrinks()

````

class Piloto {
    constructor(
            nome,
            dataNascimento,
            tempoDeVoo,
            temPermissaoParaVoar
        ) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.tempoDeVoo = tempoDeVoo;
    this.temPermissaoParaVoar = temPermissaoParaVoar;
    }
}

````

````

class Piloto {
    constructor(
        nome,
        dataNascimento,
        tempoDeVoo,
        temPermissaoParaVoar
    )
    
    const piloto = new Piloto(
        'geraldino',
        new Date(1990, 2, 3),
        '10 anos',
        true
    )
}

piloto.nome // geraldino
piloto.dataNascimento // 03 1990 00:00:00 GMT-0300

````

````

class Piloto {
    constructor( ...
    }

    pilotar() {
        console.log(`${this.nome} vai pilotar!`);
    }

    dormir() {
        console.log(`${this.nome` vai dormir!);
    }
    
````

````

piloto.pilotar()

piloto.dormir()

````

Obs: No conceito de classes não se utiliza a palavra function ao criar um função como o pilotar e dormir.