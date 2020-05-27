// logica do jogo
// no construtor eu informo as dependencias que eu preciso para a classe

class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente as propriedade
    // tela
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            { img: './arquivos/batman.svg', name: 'batman'},
            { img: './arquivos/frank.svg', name: 'frank' },
            { img: './arquivos/groot.svg', name: 'groot' },
            { img: './arquivos/mulhermaravilha.svg', name: 'mulhermaravilha' }
        ]
    }
    // para usar o this, não podemos usar static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}
