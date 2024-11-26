import { guardarPaciente } from "../services/serviciosPaciente.js"

//controlador=archivo de js que sirve para manipular la interfaz grafica 

//1. Asignar un id a cada input, select o textarea del formulario
//2. Asignar un id a cada boton de envio de formulario
//3. A cada id asignado le creo una variable en JS
//4. Asociar a cada variable el id que se configuro en el HTML


let cajaNombre=document.getElementById("nombrepaciente")
let cajaFechaNacimiento=document.getElementById("nacimientopaciente")
let cajaCiudad=document.getElementById("ciudadpaciente")
let cajaCorreo=document.getElementById("correopaciente")
let cajaIPS=document.getElementById("ipspaciente")
let cajaTelefono=document.getElementById("telefonopaciente")
let cajaFechaAfiliacion=document.getElementById("afiliacionpaciente")
let cajaGrupoIngreso=document.getElementById("grupoingresopaciente")
let cajaAsegurado=document.getElementById("tienepoliza")

let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//5. DETECTAR EL EVENTO DEL CLICK EN EL BOTON
botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()

    //6. Recoger los datos (los atributos del objeto se deben nombrar tal cual estan en java en la capa de modelo)

    let datosFormularioPaciente={
        nombre:cajaNombre.value,
        anioNacimiento:cajaFechaNacimiento.value,
        ciudad:cajaCiudad.value,
        correo:cajaCorreo.value,
        telefono:cajaTelefono.value,
        ips:cajaIPS.value,
        tienePoliza:true,
        grupoIngreso:cajaGrupoIngreso.value,
        fechaAfiliacion:cajaFechaAfiliacion.value

    }

    guardarPaciente(datosFormularioPaciente)
    .then(function(respuestaBack){
    Swal.fire({
        title: "Buen Trabajo!",
        text: "Ya haces parte de nuestra familia!",
        icon: "success"
        })
    })


})

