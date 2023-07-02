class Pedido {
    nomePrato: string;
    numPedido: number;
    nomeCliente: string;
    valorTotal: number;

    constructor(nomePrato: string, numPedido: number, nomeCliente: string, valorToral: number) {
        this.nomePrato = nomePrato;
        this.numPedido = numPedido;
        this.nomeCliente = nomeCliente;
        this.valorTotal = valorToral;
    }
}

class FilaDePedidos {
    pedidos: Pedido[] = [];

    //método adiciona novo pedido ao final da fila
    enqueuePedido(nomePrato: string, numPedido: number, nomeCliente: string, valorToral: number): void {
        let novoPedido = new Pedido(nomePrato, numPedido, nomeCliente, valorToral);
        if (nomePrato != "" && numPedido > 0 && nomeCliente != "" && valorToral > 0) {
            this.pedidos.push(novoPedido);
        } else {
            console.log("Dados incorretos, refaça seu pedido.")
        }
    }

    //método remove pedido do começo da fila
    dequeuePedido(): any {
        if (this.pedidos.length !== 0) {
            return this.pedidos.shift();
        } else {
            return console.log("Fila vazia.")
        }
    }

    //método lista os pedidos  
    displayPedidos(): void {
        if (this.pedidos.length == 0) {
            return console.log("Fila vazia.")
        } else {
            for (let i = 0; i < this.pedidos.length; i++) {
                let pedido = this.pedidos[i];
                console.log(`Pedido n: ${pedido.numPedido}, Cliente: ${pedido.nomeCliente}, Prato: ${pedido.nomePrato}, Valor: ${pedido.valorTotal}`)
            }
        }
    }
}

const filaPedidos = new FilaDePedidos();

//testes
filaPedidos.displayPedidos();
filaPedidos.dequeuePedido();
filaPedidos.enqueuePedido("", 1, "", 12)
filaPedidos.enqueuePedido("Macarronada", 1, "Estevan", 40.50);
filaPedidos.enqueuePedido("Hamburguer", 2, "Pedro", 25.00);
filaPedidos.enqueuePedido("Lasanha", 3, "Eduardo", 29.90);
filaPedidos.enqueuePedido("Pastel de queijo", 4, "Nicolas", 22.50);
filaPedidos.displayPedidos();
filaPedidos.dequeuePedido();
filaPedidos.displayPedidos();



