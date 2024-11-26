import { guardarSignoVital } from "../services/serviciosSignoVital.js";

// controlador=archivo de js que sirve para manipular la interfaz grafica

// 1. Asignar un id a cada input, select o textarea del formulario
// 2. Asignar un id a cada boton de envio de formulario
// 3. A cada id asignado le creo una variable en JS
// 4. Asociar a cada variable el id que se configuro en el HTML

let cajaNombreSigno = document.getElementById("nombresignovital");
let cajaValorSigno = document.getElementById("valorsignovital");
let cajaFechaMedida = document.getElementById("fechamedida");
let cajaTerminosyCondiciones = document.getElementById("terminosycondiciones");

let botonRegistroSignoVital = document.getElementById("botonregistrosignovital");

// 5. DETECTAR EL EVENTO DEL CLICK EN EL BOTON
botonRegistroSignoVital.addEventListener("click", function(evento) {
    evento.preventDefault();

    console.log("hola aqui llegue")
    // 6. Recoger los datos (los atributos del objeto se deben nombrar tal cual están en el modelo)

    let datosFormularioSignoVital = {
        nombre: cajaNombreSigno.value,
        valor: cajaValorSigno.value,
        fechaMedida: cajaFechaMedida.value,
        terminosyCondiciones: cajaTerminosyCondiciones.checked
    };

    guardarSignoVital(datosFormularioSignoVital)
    .then(function(respuestaBack) {
        Swal.fire({
            title: "Buen Trabajo!",
            text: "Signo Vital Registrado con Éxito!",
            icon: "success"
        });
    });
});

