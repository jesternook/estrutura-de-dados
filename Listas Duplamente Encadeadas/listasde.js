var Produto = /** @class */ (function () {
    function Produto(nomeProduto, codBarras, preco, quantidade) {
        this.nomeProduto = nomeProduto;
        this.codBarras = codBarras;
        this.preco = preco;
        this.quantidade = quantidade;
        this.nextProduto = null;
        this.prevProduto = null;
    }
    return Produto;
}());
var ListaDeProdutos = /** @class */ (function () {
    function ListaDeProdutos() {
        this.headProduto = null;
    }
    //método adicionar produto no começo da lista (head)
    ListaDeProdutos.prototype.addProdutoFirst = function (nomeProduto, codBarras, preco, quantidade) {
        var novoProduto = new Produto(nomeProduto, codBarras, preco, quantidade);
        novoProduto.nextProduto = this.headProduto;
        novoProduto.prevProduto = null;
        if (this.headProduto !== null) {
            this.headProduto.prevProduto = novoProduto;
        }
        this.headProduto = novoProduto;
    };
    //método adicionar produto no final da lista
    ListaDeProdutos.prototype.addProdutoLast = function (nomeProduto, codBarras, preco, quantidade) {
        var novoProduto = new Produto(nomeProduto, codBarras, preco, quantidade);
        novoProduto.nextProduto = null;
        if (this.headProduto == null) {
            novoProduto.prevProduto = null;
            this.headProduto = novoProduto;
            return;
        }
        else {
            var produtoAtual = this.headProduto;
            while (produtoAtual.nextProduto !== null) {
                produtoAtual = produtoAtual.nextProduto;
            }
            produtoAtual.nextProduto = novoProduto;
            novoProduto.prevProduto = produtoAtual;
        }
    };
    //método adicionar novo produto após um produto existente da lista
    ListaDeProdutos.prototype.addProdutoAfter = function (nomeProduto, codBarras, preco, quantidade, codBarrasExistente) {
        var novoProduto = new Produto(nomeProduto, codBarras, preco, quantidade);
        var produtoAtual = this.findProdutoByCod(codBarrasExistente);
        if (produtoAtual !== null) {
            novoProduto.nextProduto = produtoAtual === null || produtoAtual === void 0 ? void 0 : produtoAtual.nextProduto;
            novoProduto.prevProduto = produtoAtual;
            produtoAtual.nextProduto = novoProduto;
        }
        return null;
    };
    //método remover produto da lista através do código de barras
    ListaDeProdutos.prototype.delProduto = function (codBarras) {
        var produtoARemover = this.findProdutoByCod(codBarras);
        if (produtoARemover === null) {
            return;
        }
        if (produtoARemover !== null) {
            if (produtoARemover.prevProduto !== null) {
                produtoARemover.prevProduto.nextProduto = produtoARemover.nextProduto;
            }
            else {
                this.headProduto = produtoARemover.nextProduto;
            }
            if (produtoARemover.nextProduto !== null) {
                produtoARemover.nextProduto.prevProduto = produtoARemover.prevProduto;
            }
            produtoARemover.nextProduto = null;
            produtoARemover.prevProduto = null;
        }
    };
    //método atualiza a quantidade do produto no estoque
    ListaDeProdutos.prototype.updateProduto = function (codBarras, updateQuantidade) {
        var produtoAtual = this.findProdutoByCod(codBarras);
        if (produtoAtual !== null && updateQuantidade >= 0) {
            produtoAtual.quantidade = updateQuantidade;
            return true;
        }
        return false;
    };
    //método listar todos os produtos
    ListaDeProdutos.prototype.listarProdutos = function () {
        if (this.headProduto == null) {
            console.log("Não há produtos no estoque.");
        }
        var produtoAtual = this.headProduto;
        while (produtoAtual !== null) {
            console.log(produtoAtual);
            produtoAtual = produtoAtual.nextProduto;
        }
    };
    //método encontra produtos através do código de barras
    ListaDeProdutos.prototype.findProdutoByCod = function (codBarras) {
        var produtoAtual = this.headProduto;
        while (produtoAtual !== null) {
            if (produtoAtual.codBarras === codBarras)
                return produtoAtual;
            produtoAtual = produtoAtual.nextProduto;
        }
        return null;
    };
    return ListaDeProdutos;
}());
var novaListaProdutos = new ListaDeProdutos();
//testes
novaListaProdutos.addProdutoFirst("Extrato de Tomate", 4291032596, 5.50, 45);
novaListaProdutos.addProdutoLast("Suco de Caju", 3052904774, 2.00, 12);
novaListaProdutos.addProdutoLast("Biscoito Polvilho", 9368718637, 7.50, 35);
novaListaProdutos.listarProdutos();
novaListaProdutos.addProdutoFirst("Pão de forma", 6519726415, 12.50, 42);
novaListaProdutos.listarProdutos();
novaListaProdutos.addProdutoAfter("Detergente", 7731340687, 5.00, 70, 4291032596);
novaListaProdutos.listarProdutos();
novaListaProdutos.updateProduto(3052904774, 5);
novaListaProdutos.listarProdutos();
novaListaProdutos.delProduto(6519726415);
novaListaProdutos.listarProdutos();
