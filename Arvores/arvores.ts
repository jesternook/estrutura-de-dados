export class Produto {
    public id: number;
    public nomeProduto: string;
    public quantidade: number;

    constructor(id: number, nomeProduto: string, quantidade: number) {
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
    }
}

class Node {
    public produto: Produto;
    public nodeEsquerda: Node | null;
    public nodeDireita: Node | null;

    constructor(produto: Produto) {
        this.produto = produto;
        this.nodeEsquerda = null;
        this.nodeDireita = null;
    }
}

class ArvoreProduto {
    private raiz: Node | null;

    constructor() {
        this.raiz = null;
    }

    addProduto(id: number, nomeProduto: string, quantidade: number): void {
        const novoProduto = new Produto(id, nomeProduto, quantidade)
        const novoNode = new Node(novoProduto);
        if (this.raiz === null) {
            this.raiz = novoNode;
        } else {
            this.addNode(this.raiz, novoNode)
        }
    }

    private addNode(nodeAtual: Node, novoNode: Node) {
        if (novoNode.produto.id < nodeAtual.produto.id) {
            if (nodeAtual.nodeEsquerda === null) {
                nodeAtual.nodeEsquerda = novoNode;
            } else {
                this.addNode(nodeAtual.nodeEsquerda, novoNode);
            }
        } else if (novoNode.produto.id > nodeAtual.produto.id) {
            if (nodeAtual.nodeDireita === null) {
                nodeAtual.nodeDireita = novoNode;
            } else {
                this.addNode(nodeAtual.nodeDireita, novoNode)
            }
        } else {
            nodeAtual.produto.nomeProduto = novoNode.produto.nomeProduto;
            nodeAtual.produto.quantidade = novoNode.produto.quantidade;
        }
    }

    getProduto(id: number): Produto | null {
        return this.getNode(this.raiz, id);
    }

    private getNode(nodeAtual: Node | null, id: number): Produto | null {
        if (nodeAtual === null) {
            console.log("Produto não encontrado.")
            return null;
        }
        if (id === nodeAtual.produto.id) {
            console.log(`Produto: ${nodeAtual.produto.nomeProduto}, Estoque: ${nodeAtual.produto.quantidade}`);
            return nodeAtual.produto;
        }
        if (id < nodeAtual.produto.id) {
            return this.getNode(nodeAtual.nodeEsquerda, id);
        } 
        return this.getNode(nodeAtual.nodeDireita, id);
    }
}

const novaArvore = new ArvoreProduto();

novaArvore.addProduto(1, "Coturno", 12);
novaArvore.addProduto(2, "Chinelo", 10);
novaArvore.addProduto(3, "Salto", 5);
novaArvore.getProduto(2);
novaArvore.getProduto(5);