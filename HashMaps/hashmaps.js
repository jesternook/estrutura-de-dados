var Jogo = /** @class */ (function () {
    function Jogo() {
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
    Jogo.prototype.addUsuario = function (nomeUsuario) {
        if (nomeUsuario in this.tabelaPontuacao) {
            console.log("O nome de usu\u00E1rio '".concat(nomeUsuario, "' j\u00E1 existe."));
        }
        this.tabelaPontuacao[nomeUsuario] = 0;
    };
    //método atualizar pontos de um usuário existente
    Jogo.prototype.updatePontuacao = function (nomeUsuario, novaPontuacao) {
        if (!(nomeUsuario in this.tabelaPontuacao)) {
            console.log("O usu\u00E1rio '".concat(nomeUsuario, "' n\u00E3o existe na tabela."));
        }
        this.tabelaPontuacao[nomeUsuario] = novaPontuacao;
    };
    //método deleta usuário existente
    Jogo.prototype.deleteUsuario = function (nomeUsuario) {
        if (!(nomeUsuario in this.tabelaPontuacao)) {
            console.log("O usu\u00E1rio '".concat(nomeUsuario, "' n\u00E3o foi encontrado."));
        }
        delete this.tabelaPontuacao[nomeUsuario];
    };
    //método obtem todos usuário em ordem decrestente
    Jogo.prototype.getAllPontuacao = function () {
        var usuarios = Object.entries(this.tabelaPontuacao);
        usuarios.sort(function (a, b) { return b[1] - a[1]; });
        for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
            var _a = usuarios_1[_i], key = _a[0], value = _a[1];
            console.log("Usu\u00E1rio: ".concat(key, ", Pontua\u00E7\u00E3o: ").concat(value));
        }
    };
    //método obtem usuario com maior pontuação
    Jogo.prototype.getVencedor = function () {
        var maiorPontuacao = Math.max.apply(Math, Object.values(this.tabelaPontuacao));
        var tabela = Object.entries(this.tabelaPontuacao);
        for (var _i = 0, tabela_1 = tabela; _i < tabela_1.length; _i++) {
            var _a = tabela_1[_i], key = _a[0], value = _a[1];
            if (value === maiorPontuacao) {
                console.log("Usu\u00E1rio '".concat(key, "' \u00E9 o vencedor com '").concat(value, "' pontos!"));
                return key;
            }
        }
        return null;
    };
    return Jogo;
}());
var novoJogo = new Jogo();
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
