let cajaNombre = document.getElementById("nombreenfermedad");
let cajaSintomas = document.getElementById("sintomasenfermedad");
let cajaClasificacion = document.getElementById("clasificacionenfermedad");
let cajaGrado = document.getElementById("gradoenfermedad");
let cajaProbabilidad = document.getElementById("probabilidadenfermedad");
let cajaTerminosyCondiciones = document.getElementById("terminosycondiciones");

let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad");

botonRegistroEnfermedad.addEventListener("click", function(evento) {
    evento.preventDefault();

    let datosFormularioEnfermedad = {
        nombre: cajaNombre.value,
        sintomas: cajaSintomas.value,
        clasificacionEnfermedad: cajaClasificacion.value,
        gradoEnfermedad: cajaGrado.value,
        probabilidadVida: cajaProbabilidad.value,
        terminosyCondiciones: cajaTerminosyCondiciones.checked
    };

    console.log(datosFormularioEnfermedad);

    document.getElementById('botonregistroenfermedad').addEventListener('click', function () {
        Swal.fire({
            title: "¡Buen Trabajo!",
            text: "Enfermedad registrada con éxito",
            icon: "success"
        });
    });
});
