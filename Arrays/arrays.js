"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeCompras = void 0;
var ListaDeCompras = /** @class */ (function () {
    function ListaDeCompras() {
        this.itens = [];
        this.quantidade = [];
    }
    ListaDeCompras.prototype.adicionarItem = function (nomeProduto, quantidadeDesejada) {
        this.itens.push(nomeProduto);
        this.quantidade.push(quantidadeDesejada);
    };
    ListaDeCompras.prototype.removerItem = function (nomeProduto) {
        var indexProduto = this.itens.indexOf(nomeProduto);
        this.itens.splice(indexProduto, 1);
        this.quantidade.splice(indexProduto, 1);
        return "Item removido com sucesso";
    };
    ListaDeCompras.prototype.listarItens = function () {
        for (var i = 0; i < this.itens.length; i++) {
            console.log("Item: ".concat(this.itens[i], " -- Quantidade: ").concat(this.quantidade[i]));
        }
    };
    return ListaDeCompras;
}());
exports.ListaDeCompras = ListaDeCompras;
var novaLista = new ListaDeCompras();
//adicionar itens
novaLista.adicionarItem("Maça", 7);
novaLista.adicionarItem("Pães", 12);
novaLista.adicionarItem("Chá de canela", 1);
novaLista.adicionarItem("Requeijão", 1);
//remover itens
novaLista.removerItem('Maça');
novaLista.listarItens();
