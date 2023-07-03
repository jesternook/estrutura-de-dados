class Livro {
    public tituloLivro: string;
    public numPaginas: number;

    constructor(tituloLivro: string, numPaginas: number) {
        this.tituloLivro = tituloLivro;
        this.numPaginas = numPaginas;
    }
}

class PilhaDeLivros {
    public livros: Livro[] = [];
    public top: number;

    constructor() {
        this.top = 0;
    }

    //método adicionar novo livro no topo da pilha
    addLivro(tituloLivro: string, numPaginas: number): void {
        const novoLivro = new Livro(tituloLivro, numPaginas);
        this.livros[this.top] = novoLivro;
        this.top++;
    }

    //método remover ultimo elemento adicionado da pilha
    delLivro(): Livro | undefined {
        if (this.top === 0) {
            console.log("Pilha de livros vazia");
            return undefined
        } else {
            this.top--;
            return this.livros[this.top];
        }
    }

    //método retorna livro no topo da pilha
    peekPilha(): Livro | undefined | void {
        if (this.top === 0) {
            console.log("Pilha de livros vazia");
            return undefined;
        } else {
            return console.log(this.livros[this.top - 1]);
        }
    }

    //método listar todos livros da pilha
    displayLivros(): Livro | undefined {
        if (this.top === 0) {
            console.log("Pilha de livros vazia");
            return undefined
        } else {
            for (let i = 0; i < this.livros.length; i++) {
                let livro = this.livros[i];
                console.log(`Título: ${livro.tituloLivro}  |  Número de páginas: ${livro.numPaginas}`);
            }
        }
    }
}

const novaPilha = new PilhaDeLivros();

//testes
novaPilha.displayLivros();
novaPilha.addLivro("O Silmarillion", 496);
novaPilha.addLivro("Os Filhos de Húrin", 288);
novaPilha.addLivro("Beren e Lúthien", 368);
novaPilha.peekPilha();
novaPilha.displayLivros();
novaPilha.delLivro();
novaPilha.peekPilha();