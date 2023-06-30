class Produto {
    nomeProduto: string;
    codBarras: number;
    preco: number;
    quantidade: number
    nextProduto: Produto | null;
    prevProduto: Produto | null;

    constructor(nomeProduto: string, codBarras: number, preco: number, quantidade: number) {
        this.nomeProduto = nomeProduto;
        this.codBarras = codBarras;
        this.preco = preco;
        this.quantidade = quantidade;
        this.nextProduto = null;
        this.prevProduto = null;
    }
}

class ListaDeProdutos {

    headProduto: Produto | null;

    constructor() {
        this.headProduto = null;
    }

    //método adicionar produto no começo da lista (head)
    addProdutoFirst(nomeProduto: string, codBarras: number, preco: number, quantidade: number): void {
        const novoProduto = new Produto(nomeProduto, codBarras, preco, quantidade);
        novoProduto.nextProduto = this.headProduto;
        novoProduto.prevProduto = null;
        if (this.headProduto !== null) {
            this.headProduto.prevProduto = novoProduto;
        }
        this.headProduto = novoProduto;
    }

    //método adicionar produto no final da lista
    addProdutoLast(nomeProduto: string, codBarras: number, preco: number, quantidade: number): void {
        const novoProduto = new Produto(nomeProduto, codBarras, preco, quantidade);
        novoProduto.nextProduto = null;

        if (this.headProduto == null) {
            novoProduto.prevProduto = null;
            this.headProduto = novoProduto;
            return;
        } else {
            let produtoAtual = this.headProduto;
            while (produtoAtual.nextProduto !== null) {
                produtoAtual = produtoAtual.nextProduto;
            }
            produtoAtual.nextProduto = novoProduto;
            novoProduto.prevProduto = produtoAtual;
        }
    }

    //método adicionar novo produto após um produto existente da lista
    addProdutoAfter(nomeProduto: string, codBarras: number, preco: number, quantidade: number, codBarrasExistente: number): void | null {
        const novoProduto = new Produto(nomeProduto, codBarras, preco, quantidade);
        let produtoAtual = this.findProdutoByCod(codBarrasExistente);
        if (produtoAtual !== null) {
            novoProduto.nextProduto = produtoAtual?.nextProduto;
            novoProduto.prevProduto = produtoAtual;
            produtoAtual.nextProduto = novoProduto;
        }
        return null;
    }

    //método remover produto da lista através do código de barras
    delProduto(codBarras: number): void {
        const produtoARemover = this.findProdutoByCod(codBarras);
        if (produtoARemover === null) {
            return;
        }
        if (produtoARemover !== null) {
            if (produtoARemover.prevProduto !== null) {
                produtoARemover.prevProduto.nextProduto = produtoARemover.nextProduto;
            } else {
                this.headProduto = produtoARemover.nextProduto;
            }
            if (produtoARemover.nextProduto !== null) {
                produtoARemover.nextProduto.prevProduto = produtoARemover.prevProduto;
            }
            produtoARemover.nextProduto = null;
            produtoARemover.prevProduto = null;
        }
    }

    //método atualiza a quantidade do produto no estoque
    updateProduto(codBarras: number, updateQuantidade: number): boolean {
        let produtoAtual = this.findProdutoByCod(codBarras);
        if (produtoAtual !== null && updateQuantidade >= 0) {
            produtoAtual.quantidade = updateQuantidade;
            return true;
        }
        return false;
    }

    //método listar todos os produtos
    listarProdutos(): void {
        if (this.headProduto == null){
            console.log("Não há produtos no estoque.")
        }
        let produtoAtual = this.headProduto;
        while (produtoAtual !== null) {
            console.log(produtoAtual);
            produtoAtual = produtoAtual.nextProduto;
        }
    }

    //método encontra produtos através do código de barras
    findProdutoByCod(codBarras: number): Produto | null {
        let produtoAtual = this.headProduto;
        while (produtoAtual !== null) {
            if (produtoAtual.codBarras === codBarras)
                return produtoAtual;
            produtoAtual = produtoAtual.nextProduto;
        }
        return null;
    }
}

const novaListaProdutos = new ListaDeProdutos();

//testes
novaListaProdutos.addProdutoFirst("Extrato de Tomate", 4291032596, 5.50, 45);
novaListaProdutos.addProdutoLast("Suco de Caju", 3052904774, 2.00, 12);
novaListaProdutos.addProdutoLast("Biscoito Polvilho", 9368718637, 7.50, 35);
novaListaProdutos.listarProdutos();
novaListaProdutos.addProdutoFirst("Pão de forma", 6519726415, 12.50, 42)
novaListaProdutos.listarProdutos();
novaListaProdutos.addProdutoAfter("Detergente", 7731340687, 5.00, 70, 4291032596);
novaListaProdutos.listarProdutos();
novaListaProdutos.updateProduto(3052904774, 5)
novaListaProdutos.listarProdutos();
novaListaProdutos.delProduto(6519726415);
novaListaProdutos.listarProdutos();
