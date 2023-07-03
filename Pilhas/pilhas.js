var Livro = /** @class */ (function () {
    function Livro(tituloLivro, numPaginas) {
        this.tituloLivro = tituloLivro;
        this.numPaginas = numPaginas;
    }
    return Livro;
}());
var PilhaDeLivros = /** @class */ (function () {
    function PilhaDeLivros() {
        this.livros = [];
        this.top = 0;
    }
    //método adicionar novo livro no topo da pilha
    PilhaDeLivros.prototype.addLivro = function (tituloLivro, numPaginas) {
        var novoLivro = new Livro(tituloLivro, numPaginas);
        this.livros[this.top] = novoLivro;
        this.top++;
    };
    //método remover ultimo elemento adicionado da pilha
    PilhaDeLivros.prototype.delLivro = function () {
        if (this.top === 0) {
            console.log("Pilha de livros vazia");
            return undefined;
        }
        else {
            this.top--;
            return this.livros[this.top];
        }
    };
    //método retorna livro no topo da pilha
    PilhaDeLivros.prototype.peekPilha = function () {
        if (this.top === 0) {
            console.log("Pilha de livros vazia");
            return undefined;
        }
        else {
            return console.log(this.livros[this.top - 1]);
        }
    };
    //método listar todos livros da pilha
    PilhaDeLivros.prototype.displayLivros = function () {
        if (this.top === 0) {
            console.log("Pilha de livros vazia");
            return undefined;
        }
        else {
            for (var i = 0; i < this.livros.length; i++) {
                var livro = this.livros[i];
                console.log("T\u00EDtulo: ".concat(livro.tituloLivro, "  |  N\u00FAmero de p\u00E1ginas: ").concat(livro.numPaginas));
            }
        }
    };
    return PilhaDeLivros;
}());
var novaPilha = new PilhaDeLivros();
//testes
novaPilha.displayLivros();
novaPilha.addLivro("O Silmarillion", 496);
novaPilha.addLivro("Os Filhos de Húrin", 288);
novaPilha.addLivro("Beren e Lúthien", 368);
novaPilha.peekPilha();
novaPilha.displayLivros();
novaPilha.delLivro();
novaPilha.peekPilha();
