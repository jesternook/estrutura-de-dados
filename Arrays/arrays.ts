export class ListaDeCompras {
    itens: string[] = [];
    quantidade: number[] = [];

    adicionarItem(nomeProduto: string, quantidadeDesejada: number): any{
        this.itens.push(nomeProduto);
        this.quantidade.push(quantidadeDesejada);
    }

    removerItem(nomeProduto: string): any {
        let indexProduto: number = this.itens.indexOf(nomeProduto);
        this.itens.splice(indexProduto, 1);
        this.quantidade.splice(indexProduto, 1);
        return "Item removido com sucesso";
    }

    listarItens(){
        for(let i = 0; i < this.itens.length; i++){
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
//remover itens
novaLista.removerItem('Maça');
novaLista.listarItens();