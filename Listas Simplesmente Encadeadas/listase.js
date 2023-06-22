var Paciente = /** @class */ (function () {
    function Paciente(nome, id, estadoSaude) {
        this.nome = nome;
        this.id = id;
        this.estadoSaude = estadoSaude;
        this.proximoPaciente = null;
    }
    return Paciente;
}());
var ListaDePaciente = /** @class */ (function () {
    function ListaDePaciente() {
        this.headPaciente = null;
    }
    //método para adicionar paciente na lista (final)
    ListaDePaciente.prototype.addPaciente = function (nome, id, estadoSaude) {
        var novoPaciente = new Paciente(nome, id, estadoSaude);
        if (this.headPaciente === null) {
            this.headPaciente = novoPaciente;
        }
        else {
            var pacienteAtual = this.headPaciente;
            while (pacienteAtual.proximoPaciente !== null) {
                pacienteAtual = pacienteAtual.proximoPaciente;
            }
            pacienteAtual.proximoPaciente = novoPaciente;
        }
    };
    //método para adicionar paciente na lista (começo/head)
    ListaDePaciente.prototype.addFrontPaciente = function (nome, id, estadoSaude) {
        var novoPaciente = new Paciente(nome, id, estadoSaude);
        novoPaciente.proximoPaciente = this.headPaciente;
        this.headPaciente = novoPaciente;
    };
    //método para deletar paciente da lista através do id
    ListaDePaciente.prototype.delPaciente = function (id) {
        if (this.headPaciente === null) {
            return;
        }
        else if (this.headPaciente.id === id) {
            this.headPaciente = this.headPaciente.proximoPaciente;
            return;
        }
        else {
            var pacienteAtual = this.headPaciente;
            while (pacienteAtual.proximoPaciente !== null) {
                if (pacienteAtual.proximoPaciente.id === id) {
                    pacienteAtual.proximoPaciente = pacienteAtual.proximoPaciente.proximoPaciente;
                    return;
                }
                pacienteAtual = pacienteAtual.proximoPaciente;
            }
            console.log("Paciente com ID ".concat(id, " n\u00E3o encontrado na lista."));
        }
    };
    //método para listar todos pacientes
    ListaDePaciente.prototype.displayPacientes = function () {
        var pacienteAtual = this.headPaciente;
        while (pacienteAtual !== null) {
            console.log(pacienteAtual);
            pacienteAtual = pacienteAtual.proximoPaciente;
        }
    };
    //método extra para encontrar o ultimo paciente da lista, sem a propriedade tail
    ListaDePaciente.prototype.lastPaciente = function (headPaciente) {
        if (headPaciente === null) {
            return null;
        }
        var pacienteAtual = headPaciente;
        while (pacienteAtual.proximoPaciente !== null) {
            pacienteAtual = pacienteAtual.proximoPaciente;
        }
        return pacienteAtual;
    };
    return ListaDePaciente;
}());
var novaLista = new ListaDePaciente();
novaLista.addPaciente("Caio Oliveira Silva", 1, "Estável");
novaLista.addPaciente("Fábio Pereira Martins", 2, "Tratamento Intenso");
novaLista.addPaciente("Vitória Ferreira Cunha", 3, "Tratamento Intenso");
novaLista.displayPacientes();
novaLista.addFrontPaciente("Rafaela Silva Araujo", 4, "Estado Crítico");
novaLista.displayPacientes();
novaLista.delPaciente(1);
novaLista.displayPacientes();
