var Pedido = /** @class */ (function () {
    function Pedido(nomePrato, numPedido, nomeCliente, valorToral) {
        this.nomePrato = nomePrato;
        this.numPedido = numPedido;
        this.nomeCliente = nomeCliente;
        this.valorTotal = valorToral;
    }
    return Pedido;
}());
var FilaDePedidos = /** @class */ (function () {
    function FilaDePedidos() {
        this.pedidos = [];
    }
    //método adiciona novo pedido ao final da fila
    FilaDePedidos.prototype.enqueuePedido = function (nomePrato, numPedido, nomeCliente, valorToral) {
        var novoPedido = new Pedido(nomePrato, numPedido, nomeCliente, valorToral);
        if (nomePrato != "" && numPedido > 0 && nomeCliente != "" && valorToral > 0) {
            this.pedidos.push(novoPedido);
        }
        else {
            console.log("Dados incorretos, refaça seu pedido.");
        }
    };
    //método remove pedido do começo da fila
    FilaDePedidos.prototype.dequeuePedido = function () {
        if (this.pedidos.length !== 0) {
            return this.pedidos.shift();
        }
        else {
            return console.log("Fila vazia.");
        }
    };
    //método lista os pedidos  
    FilaDePedidos.prototype.displayPedidos = function () {
        if (this.pedidos.length == 0) {
            return console.log("Fila vazia.");
        }
        else {
            for (var i = 0; i < this.pedidos.length; i++) {
                var pedido = this.pedidos[i];
                console.log("Pedido n: ".concat(pedido.numPedido, ", Cliente: ").concat(pedido.nomeCliente, ", Prato: ").concat(pedido.nomePrato, ", Valor: ").concat(pedido.valorTotal));
            }
        }
    };
    return FilaDePedidos;
}());
var filaPedidos = new FilaDePedidos();
//testes
filaPedidos.displayPedidos();
filaPedidos.dequeuePedido();
filaPedidos.enqueuePedido("", 1, "", 12);
filaPedidos.enqueuePedido("Macarronada", 1, "Estevan", 40.50);
filaPedidos.enqueuePedido("Hamburguer", 2, "Pedro", 25.00);
filaPedidos.enqueuePedido("Lasanha", 3, "Eduardo", 29.90);
filaPedidos.enqueuePedido("Pastel de queijo", 4, "Nicolas", 22.50);
filaPedidos.displayPedidos();
filaPedidos.dequeuePedido();
filaPedidos.displayPedidos();
