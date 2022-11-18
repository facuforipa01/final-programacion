let enfermero = []
let paciente = []
let doctor = []

class Clinica {
    constructor(nombre, duenio, respJuridica, doctores, enfermeros) {
        this.nombre = nombre
        this.duenio = duenio
        this.respJuridica = respJuridica
        this.doctores = doctores
        this.enfermeros = enfermeros
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
class Pacientes extends Profesionales {
    constructor(nombre, apellido, dni, fechaNac, turno, obraSocial) {
        super(nombre, apellido);
        this.dni = dni
        this.fechaNac = fechaNac
        this.turno = turno
        this.obraSocial = obraSocial
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

//pedido de informacion sobre el cliente + turno

do {
    cont=0
    cont=cont+1
    var nombreP = prompt('nombre')
    var apellidoP = prompt(`apellido`)
    var dniP = prompt(`dni`)
    var fechaNacP = prompt(`ingrese su fecha de nacimiento`)
    var turnoP = prompt("a que hora va a querer el turno?")
    var obraSocialP = prompt("que obra social posee?")

    var pacienteX = new Pacientes(nombreP, apellidoP, dniP, fechaNacP, turnoP, obraSocialP)

    paciente.push(pacienteX)


} while (cont<1);

console.log(pacienteX)

/* let nombre = prompt('nombre')
let apellido = prompt(`apellido`)
let matricula = prompt(`matricula`)
paciente = prompt(`apellido`)
let especialidad = prompt(`especialidad`)
let doctor1 = new Doctores(nombre, apellido, matricula, especialidad) */

let doctor2 = new Doctores("maria", "rozas", 54321, 4, "pediatria")
doctor.push(doctor2)
console.log(doctor2.infoDoc())



let doctor3 = new Doctores("laura", "gimenez", 56898, 5, "cardiologia")
doctor.push(doctor3)
console.log(doctor3.infoDoc())

/*   doctor.push(doctor2)
console.log(Doctores.infoDoc(doctor2))
doctor.push(doctor2) */
// console.log(doctor3.infoDoc()) */  
//console.log(doctor1.infoDoc())

let enfermero1 = new Enfermeros("facu", "ruiz", 321, 3, true)
console.log(enfermero1.infoEnf())

let enfermero2 = new Enfermeros("martina", "martinez", 654, 8, false)
console.log(enfermero2.infoEnf())

let enfermero3 = new Enfermeros("jose", "gomez", 321, 3, true)
console.log(enfermero3.infoEnf())

//clase turno que extienda de pacientes y de doctores
//clase paciente extiende de doctor y turno extiende de paciente