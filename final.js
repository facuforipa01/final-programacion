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
        this.apellido=apellido
        this.dni=dni
        this.fechaNac=fechaNac
        this.turno=turno
        this.obraSocial=obraSocial
    }
}

class Profesionales {
    constructor(nombre, apellido, matricula, pacientes){
        this.nombre = nombre
        this.apellido=apellido
        this.matricula=matricula
        this.pacientes=pacientes
    }
}

class Doctores extends Profesionales {
    constructor(especialidad){
        super();
        this.especialidad=especialidad
    }
    infoDoc()
    infoTurnos()
}

class Enfermeros extends Profesionales {
    constructor(licenciatura){
        super();
        this.licenciatura=licenciatura
    }
}