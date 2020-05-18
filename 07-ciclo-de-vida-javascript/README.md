# 🤯 Ciclo de vida do Javascript
Abordagem de funções assíncronas, cenários da vida real e porque tudo isso embola tanto a vida dos desenvolvedores.

----

## 🎓 Aprendizagem

- [x] Introdução ao capítulo
- [x] Funções assíncronas?
- [x] O que são Callbacks?
- [x] Demonstração: Trabalhando com Callbacks
- [x] O que são Promises?
- [x] Trabalhando com Promises?
- [x] Como usar async/await para resolver Promises?

---

## Entendendo sincronismo

- Imagina que você está em na fila do banco e precisa aguardar cada pessoa ser atendida para conseguir resolver as suas coisas e durante esse tempo não pode fazer nada. Ou seja, tem que aguardar um a um ser atendido até chegar a sua vez, isso na programação é chamado de sincronia, sempre um atrás do outro.

![bank](https://media.giphy.com/media/3o6Ztm0VpFKWc5YSUE/source.gif)

- E assincronia o que seria? É parecido com o fastfood, por exemplo você faz o pedido e recebe uma senha, enquanto aguarda pelo lanche você pode fazer várias outras coisas ao mesmo tempo, como fazer uma ligação, jogar um jogo, sair e dar uma volta, e ai o seu pedido fica pronto e a sua senha é chamada. Isso é chamado de Callback (chamada de volta), você vai entrega a senha e recebe o lanche.

![fastfood](https://media.giphy.com/media/26uflHoMuKMUInB5K/source.gif)

- assincronia = termina as coisas sobre demanda e aos poucos

---

## Event Loop

- Dentro do event loop o javascript executa uma função por vez e 1. recebe essa função assincrona, como uma leitura de um arquivo ou processamento de um dado e em seguida ele 2. delega para o sistema operacional fazendo o pedido "windows, quando você conseguir ler e obter os dados, faz um callback e me chama de volta", feito isso o 3. javascript continua executando outras coisas, quando o sistema operacional termina ele 4. devolve a resposta pro event loop que 5. retorna para quem chamou.

- Desta forma o Javascript sempre executa as operações sobre demanda e por isso é mais rápido, pois não precisa parar toda a sua execução para fazer alguma coisa.

````

const callback = function(msg) {
    console.log(msg)
}

terminal.question("Nome", callback)

````

Neste exemplo usando o terminal.question o que passamos como segundo argumento vai ser sempre o callback, que é a função que vai ser executada quando o terminal acabar.

Por convenção usamos o callback sempre com 2 parâmetros, sendo o primeiro de erro e o segundo o sucesso.

````

const callback = function(error, result) {
    if (error) return console.log(error)
    return console.log(result)
}

fs.readFile('arquivo.txt', callback)

````



