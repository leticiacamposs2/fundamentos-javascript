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

        this.iconePadrao = './arquivos/padrao.svg'
        this.heroisEscondidos = []
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
        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }
    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes
        // pelo icone padrão
        // como fizemos no construtor, vamor extrair somente o necessario
        // usando a sintaze ({ chave: 1 }) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando nao usamos : (exemplo do id), o JS entende que o nome
        // é o mesmo do valor. Ex. id: id, vira id, 
        const heroisOcultos = herois.map(( {nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // guardamos os herois para trabalhar com
        this.heroisOcultos = heroisOcultos
    }
    jogar() {
        this.embaralhar()
    }
}
