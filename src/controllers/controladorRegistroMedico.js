let cajaNombreMedico = document.getElementById("nombremedico");
let cajaMatriculaMedico = document.getElementById("matriculamedico");
let cajaEspecialidadMedico = document.getElementById("especialidadmedico");
let cajaSalarioMedico = document.getElementById("salariomedico");
let cajaIpsMedico = document.getElementById("ipsmedico");
let cajaCorreoMedico = document.getElementById("correomedico");
let cajaTelefonoMedico = document.getElementById("telefonomedico");
let cajaDireccionMedico = document.getElementById("direccionmedico");
let cajaDisponibleMedico = document.getElementById("disponiblemedico");
let cajaTienePoliza = document.getElementById("tienepoliza");

let botonRegistroMedico = document.getElementById("botonregistromedico");

botonRegistroMedico.addEventListener("click", function(evento) {
    evento.preventDefault();

    let datosFormularioMedico = {
        nombre: cajaNombreMedico.value,
        matricula: cajaMatriculaMedico.value,
        especialidad: cajaEspecialidadMedico.value,
        salario: cajaSalarioMedico.value,
        ips: cajaIpsMedico.value,
        correo: cajaCorreoMedico.value,
        telefono: cajaTelefonoMedico.value,
        direccion: cajaDireccionMedico.value,
        disponibleFinSemana: cajaDisponibleMedico.value,
        tienePoliza: cajaTienePoliza.checked
    };

    console.log(datosFormularioMedico);

    Swal.fire({
        title: "Registro Exitoso!",
        text: "El médico ha sido registrado con exito!",
        icon: "success"
    });
});
