"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeCompras = void 0;
var ListaDeCompras = /** @class */ (function () {
    function ListaDeCompras() {
        this.itens = [];
        this.quantidade = [];
    }
    ListaDeCompras.prototype.adicionarItem = function (nomeProduto, quantidadeDesejada) {
        if (nomeProduto === "") {
            console.log("Dado de produto incorreto. Digite o nome do produto");
        }
        if (quantidadeDesejada <= 0) {
            console.log("Dado de quantidade incorreto. Digite a quantidade do produto");
        }
        else {
            this.itens.push(nomeProduto);
            this.quantidade.push(quantidadeDesejada);
        }
    };
    ListaDeCompras.prototype.removerItem = function (nomeProduto) {
        var indexProduto = this.itens.indexOf(nomeProduto);
        for (var _i = 0, _a = this.itens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item != nomeProduto) {
                console.log("Dado não encontrado. Digite o nome do produto corretamente para remove-lo");
                return false;
            }
            if (nomeProduto === "") {
                console.log("Dado de produto incorreto. Digite o nome do produto");
                return false;
            }
            else if (item === nomeProduto) {
                this.itens.splice(indexProduto, 1);
                this.quantidade.splice(indexProduto, 1);
                return true;
            }
        }
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
novaLista.listarItens();
//dados inválidos
novaLista.adicionarItem('', -2);
//remover itens
novaLista.removerItem('Maça');
novaLista.removerItem('paes');
novaLista.listarItens();
