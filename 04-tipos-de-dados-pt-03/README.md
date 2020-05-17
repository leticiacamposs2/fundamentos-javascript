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
