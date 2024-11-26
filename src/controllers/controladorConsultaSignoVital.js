import { signovitalSimulados } from "../data/simuladorSignoVItal.js";

import { consultarSignosVitales} from "../services/serviciosSignoVital.js";

consultarSignosVitales()
.then(function(respuestaBack){
let filaSignosVitales = document.getElementById("filaSignosVitales");
console.log(respuestaBack);

// Recorre los datos de la BD para pintarlos en el dashboard
respuestaBack.forEach(function (signo) {
    console.log(signo);

    // 1. Crear una columna para cada signo vital
    let columna = document.createElement("div");
    columna.classList.add("col");

    // 2. Crear una tarjeta para cada signo vital
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-3", "shadow");

    // 3. Crear una etiqueta para el nombre del signo vital
    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center", "fw-bold");
    etiquetaNombre.textContent = signo.nombre;

    // Icono de imagen para cada signo vital
    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src = "../../assets/img/signovitallogo.png"; // Cambia la ruta de la imagen si es necesario

    // Agregar valor del signo vital
    let etiquetaValor = document.createElement("h5");
    etiquetaValor.classList.add("text-start");
    etiquetaValor.textContent = "Valor: " + signo.valor;

    // Agregar fecha de medida del signo vital
    let etiquetaFechaMedida = document.createElement("h5");
    etiquetaFechaMedida.classList.add("text-start");
    etiquetaFechaMedida.textContent = "Fecha de medida: " + signo.fechaMedida;

    // Botón eliminar con icono de basura
    let eliminar = document.createElement("button");
    eliminar.classList.add("btn", "btn-primary", "w-25");
    let iconoBasura = document.createElement("i");
    iconoBasura.classList.add("bi", "bi-trash-fill");
    eliminar.appendChild(iconoBasura);

    // Botón editar con icono de lápiz
    let editar = document.createElement("button");
    editar.classList.add("btn", "btn-warning", "w-25");
    let iconoEditar = document.createElement("i");
    iconoEditar.classList.add("bi", "bi-pencil-fill");
    editar.appendChild(iconoEditar);

    // Agregar los elementos a la tarjeta y a la columna
    tarjeta.appendChild(etiquetaNombre);
    tarjeta.appendChild(etiquetaIcono);
    tarjeta.appendChild(etiquetaValor);
    tarjeta.appendChild(etiquetaFechaMedida);
    tarjeta.appendChild(eliminar);
    tarjeta.appendChild(editar);
    columna.appendChild(tarjeta);
    filaSignosVitales.appendChild(columna);
});
})

