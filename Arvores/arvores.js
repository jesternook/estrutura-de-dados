"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(id, nomeProduto, quantidade) {
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
    }
    return Produto;
}());
exports.Produto = Produto;
var Node = /** @class */ (function () {
    function Node(produto) {
        this.produto = produto;
        this.nodeEsquerda = null;
        this.nodeDireita = null;
    }
    return Node;
}());
var ArvoreProduto = /** @class */ (function () {
    function ArvoreProduto() {
        this.raiz = null;
    }
    ArvoreProduto.prototype.addProduto = function (id, nomeProduto, quantidade) {
        var novoProduto = new Produto(id, nomeProduto, quantidade);
        var novoNode = new Node(novoProduto);
        if (this.raiz === null) {
            this.raiz = novoNode;
        }
        else {
            this.addNode(this.raiz, novoNode);
        }
    };
    ArvoreProduto.prototype.addNode = function (nodeAtual, novoNode) {
        if (novoNode.produto.id < nodeAtual.produto.id) {
            if (nodeAtual.nodeEsquerda === null) {
                nodeAtual.nodeEsquerda = novoNode;
            }
            else {
                this.addNode(nodeAtual.nodeEsquerda, novoNode);
            }
        }
        else if (novoNode.produto.id > nodeAtual.produto.id) {
            if (nodeAtual.nodeDireita === null) {
                nodeAtual.nodeDireita = novoNode;
            }
            else {
                this.addNode(nodeAtual.nodeDireita, novoNode);
            }
        }
        else {
            nodeAtual.produto.nomeProduto = novoNode.produto.nomeProduto;
            nodeAtual.produto.quantidade = novoNode.produto.quantidade;
        }
    };
    ArvoreProduto.prototype.getProduto = function (id) {
        return this.getNode(this.raiz, id);
    };
    ArvoreProduto.prototype.getNode = function (nodeAtual, id) {
        if (nodeAtual === null) {
            console.log("Produto não encontrado.");
            return null;
        }
        if (id === nodeAtual.produto.id) {
            console.log("Produto: ".concat(nodeAtual.produto.nomeProduto, ", Estoque: ").concat(nodeAtual.produto.quantidade));
            return nodeAtual.produto;
        }
        if (id < nodeAtual.produto.id) {
            return this.getNode(nodeAtual.nodeEsquerda, id);
        }
        return this.getNode(nodeAtual.nodeDireita, id);
    };
    return ArvoreProduto;
}());
var novaArvore = new ArvoreProduto();
novaArvore.addProduto(1, "Coturno", 12);
novaArvore.addProduto(2, "Chinelo", 10);
novaArvore.addProduto(3, "Salto", 5);
novaArvore.getProduto(2);
novaArvore.getProduto(5);
