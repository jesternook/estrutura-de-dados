class Paciente {
    nome: string;
    id: number;
    estadoSaude: string;
    proximoPaciente: Paciente | null;

    constructor(nome: string, id: number, estadoSaude: string) {
        this.nome = nome;
        this.id = id;
        this.estadoSaude = estadoSaude;
        this.proximoPaciente = null;
    }
}

class ListaDePaciente {

    headPaciente: Paciente | null;

    constructor() {
        this.headPaciente = null;
    }

    //futuro método para encontrar paciente por id

    //método para adicionar paciente na lista (final)
    addPaciente(nome: string, id: number, estadoSaude: string): void {
        const novoPaciente = new Paciente(nome, id, estadoSaude);
        if (this.headPaciente === null) {
            this.headPaciente = novoPaciente;
        } else {
            let pacienteAtual = this.headPaciente;
            while (pacienteAtual.proximoPaciente !== null) {
                pacienteAtual = pacienteAtual.proximoPaciente;
            }
            pacienteAtual.proximoPaciente = novoPaciente;
        }
    }

    //método para adicionar paciente na lista (começo/head)
    addFrontPaciente(nome: string, id: number, estadoSaude: string): void {
        const novoPaciente = new Paciente(nome, id, estadoSaude);
        novoPaciente.proximoPaciente = this.headPaciente;
        this.headPaciente = novoPaciente;
    }

    //método para deletar paciente da lista através do id
    delPaciente(id: number): void {
        if (this.headPaciente === null) {
            return;
        } else if (this.headPaciente.id === id) {
            this.headPaciente = this.headPaciente.proximoPaciente;
            return;
        } else {
            let pacienteAtual = this.headPaciente;
            while (pacienteAtual.proximoPaciente !== null) {
                if (pacienteAtual.proximoPaciente.id === id) {
                    pacienteAtual.proximoPaciente = pacienteAtual.proximoPaciente.proximoPaciente;
                    return;
                }
                pacienteAtual = pacienteAtual.proximoPaciente;
            }
            console.log(`Paciente com ID ${id} não encontrado na lista.`)
        }
    }

    //método para listar todos pacientes
    displayPacientes(): void {
        let pacienteAtual = this.headPaciente;
        while (pacienteAtual !== null) {
            console.log(pacienteAtual);
            pacienteAtual = pacienteAtual.proximoPaciente;
        }
    }

    //método extra para encontrar o ultimo paciente da lista, sem a propriedade tail
    lastPaciente(headPaciente: Paciente | null) {
        if (headPaciente === null) {
            return null;
        }
        let pacienteAtual = headPaciente;
        while (pacienteAtual.proximoPaciente !== null) {
            pacienteAtual = pacienteAtual.proximoPaciente;
        }
        return pacienteAtual;
    }
}

const novaLista = new ListaDePaciente();
novaLista.addPaciente("Caio Oliveira Silva", 1, "Estável");
novaLista.addPaciente("Fábio Pereira Martins", 2, "Tratamento Intenso");
novaLista.addPaciente("Vitória Ferreira Cunha", 3, "Tratamento Intenso");
novaLista.displayPacientes();
novaLista.addFrontPaciente("Rafaela Silva Araujo", 4, "Estado Crítico");
novaLista.displayPacientes();
novaLista.delPaciente(1);
novaLista.displayPacientes();


