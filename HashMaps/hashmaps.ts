class Jogo {
    private tabelaPontuacao: { [key: string]: number };

    constructor() {
        this.tabelaPontuacao = {};
    }

    //método hash para a tabela de pontuacao
    //decidi seguir uma abordagem sem hashcode para ter acesso a propriedade nomeUsuario
    // private metodoHash(key: string): number {
    //     let hash = 0;
    //     for (let i = 0; i < key.length; i++) {
    //         hash += key.charCodeAt(i);
    //     }
    //     return hash;
    // }

    //método adicionar novo usuário
    addUsuario(nomeUsuario: string): void | undefined {
        if (nomeUsuario in this.tabelaPontuacao) {
            console.log(`O nome de usuário '${nomeUsuario}' já existe.`)
        }
        this.tabelaPontuacao[nomeUsuario] = 0;
    }

    //método atualizar pontos de um usuário existente
    updatePontuacao(nomeUsuario: string, novaPontuacao: number): void {
        if (!(nomeUsuario in this.tabelaPontuacao)) {
            console.log(`O usuário '${nomeUsuario}' não existe na tabela.`);
        }
        this.tabelaPontuacao[nomeUsuario] = novaPontuacao;
    }

    //método deleta usuário existente
    deleteUsuario(nomeUsuario: string): void {
        if (!(nomeUsuario in this.tabelaPontuacao)) {
            console.log(`O usuário '${nomeUsuario}' não foi encontrado.`);
        }
        delete this.tabelaPontuacao[nomeUsuario];
    }

    //método obtem todos usuário em ordem decrestente
    getAllPontuacao(): void {
        let usuarios = Object.entries(this.tabelaPontuacao);
        usuarios.sort((a, b) => b[1] - a[1]);
        for (let [key, value] of usuarios) {
            console.log(`Usuário: ${key}, Pontuação: ${value}`);
        }
    }

    //método obtem usuario com maior pontuação
    getVencedor(): string | null {
        let maiorPontuacao = Math.max(...Object.values(this.tabelaPontuacao));
        let tabela = Object.entries(this.tabelaPontuacao);
        for (let [key, value] of tabela) {
            if (value === maiorPontuacao) {
                console.log(`Usuário '${key}' é o vencedor com '${value}' pontos!`)
                return key;
            }
        }
        return null;
    }
}

const novoJogo = new Jogo();

novoJogo.addUsuario("Carol");
novoJogo.addUsuario("Carol");
novoJogo.addUsuario("Daryl");
novoJogo.addUsuario("Rick");
novoJogo.addUsuario("Michonne");
novoJogo.updatePontuacao("Carol", 100);
novoJogo.updatePontuacao("Daryl", 150);
novoJogo.updatePontuacao("Rick", 120);
novoJogo.updatePontuacao("Michonne", 200);
novoJogo.getAllPontuacao();
novoJogo.deleteUsuario("Rick");
novoJogo.getAllPontuacao();
novoJogo.getVencedor();