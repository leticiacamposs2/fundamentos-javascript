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
        // força a tela a usar o THIS de jogo da memoria
        // com o .bind o this vai olhar para dentro do this do jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })        
        // ordernar
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
    }
    jogar() {
        this.embaralhar()
    }
}
