export class ListaDeCompras {
    itens: string[] = [];
    quantidade: number[] = [];

    adicionarItem(nomeProduto: string, quantidadeDesejada: number): any {
        if (nomeProduto === "") {
            console.log("Dado de produto incorreto. Digite o nome do produto")
        } if (quantidadeDesejada <= 0) {
            console.log("Dado de quantidade incorreto. Digite a quantidade do produto")
        } else {
            this.itens.push(nomeProduto);
            this.quantidade.push(quantidadeDesejada);
        }
    }

    removerItem(nomeProduto: string): any {
        let indexProduto: number = this.itens.indexOf(nomeProduto);

        for (let item of this.itens) {
            if (item != nomeProduto) {
                console.log("Dado não encontrado. Digite o nome do produto corretamente para remove-lo");
                return false
            } if (nomeProduto === "") {
                console.log("Dado de produto incorreto. Digite o nome do produto")
                return false
            } else if (item === nomeProduto) {
                this.itens.splice(indexProduto, 1);
                this.quantidade.splice(indexProduto, 1);
                return true
            }
        }
    }

    listarItens(): any {
        for (let i = 0; i < this.itens.length; i++) {
            console.log(`Item: ${this.itens[i]} -- Quantidade: ${this.quantidade[i]}`)
        }
    }
}

const novaLista = new ListaDeCompras();

//adicionar itens
novaLista.adicionarItem("Maça", 7);
novaLista.adicionarItem("Pães", 12);
novaLista.adicionarItem("Chá de canela", 1)
novaLista.adicionarItem("Requeijão", 1)
novaLista.listarItens();
//dados inválidos
novaLista.adicionarItem('', -2);
//remover itens
novaLista.removerItem('Maça');
novaLista.removerItem('paes');
novaLista.listarItens();
