class Clinica {
    constructor(nombre, duenio, respJuridica, doctores, enfermeros) {
        this.nombre = nombre
        this.duenio = duenio
        this.respJuridica = respJuridica
        this.doctores = doctores
        this.enfermeros = enfermeros
    }
}

class Pacientes {
    constructor(nombre, apellido, dni, fechaNac, turno, obraSocial) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.fechaNac = fechaNac
        this.turno = turno
        this.obraSocial = obraSocial
    }
}

class Profesionales {
    constructor(nombre, apellido, matricula, pacientes) {
        this.nombre = nombre
        this.apellido = apellido
        this.matricula = matricula
        this.pacientes = pacientes
    }
}

class Doctores extends Profesionales {
    constructor(nombre, apellido, matricula, pacientes, especialidad) {
        super(nombre, apellido, matricula, pacientes);
        this.especialidad = especialidad
    }
    infoDoc() {
        return `Informacion del doctor:
        ${this.apellido}, ${this.nombre}
        matricula: ${this.matricula}
        especialidad: ${this.especialidad}`
    }
    infoTurnos() {
        return `
        paciente: ${this.pacientes}
        con el doctor: ${this.doctor}
        hora: ${this.hora}`
    }
}


class Enfermeros extends Profesionales {
    constructor(nombre, apellido, matricula, pacientes, licenciatura) {
        super(nombre, apellido, matricula, pacientes);
        this.licenciatura = licenciatura
    }
    infoEnf() {
        return `Informacion del enfermero:
        ${this.apellido}, ${this.nombre}
        matricula: ${this.matricula}
        licenciatura: ${this.licenciatura}`
    }
}

let doctor = []
let enfermero = []
let paciente = []

let doctor1 = new Doctores(nombre, apellido, matricula, pacientes, especialidad)
doctor.push(doctor1)
let doctor2 = new Doctores(maria, rozas, 54321, 4, pediatria)
let doctor3 = new Doctores(laura, gimenez, 56898, 5, cardiologia)
console.log(doctor1.infoDoc())
console.log(doctor2.infoDoc())
console.log(doctor3.infoDoc())

let enfermero1 = new Enfermeros(martina, gonzalez, 123, 3, true)
let enfermero2 = new Enfermeros(jose, gomez, 321, 3, true)
let enfermero3 = new Enfermeros(eduardo, martinez, 654, 8, false)
console.log(enfermero1.infoEnf())
console.log(enfermero2.infoEnf())
console.log(enfermero3.infoEnf())
