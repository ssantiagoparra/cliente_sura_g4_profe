import { enfermedadSimulados } from "../data/simuladorEnfermedad.js";

console.log(enfermedadSimulados);

let filaEnfermedades = document.getElementById("filaEnfermedades");

// Recorremos los datos de enfermedades para crear las tarjetas
enfermedadSimulados.forEach(function (enfermedad) {
    // 1. Crear columna
    let columna = document.createElement("div");
    columna.classList.add("col");

    // 2. Crear tarjeta
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-3", "shadow");

    // 3. Nombre de la enfermedad
    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center", "fw-bold");
    etiquetaNombre.textContent = enfermedad.nombre;

    // 4. Icono de la enfermedad
    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src = "../../assets/img/enfermedadlogo.png"; // Cambia a la ruta de tu imagen de enfermedad

    // 5. Información de la enfermedad
    let etiquetaSintomas = document.createElement("h5");
    etiquetaSintomas.classList.add("text-start");
    etiquetaSintomas.textContent = "Síntomas: " + enfermedad.sintomas;

    let etiquetaClasificacion = document.createElement("h5");
    etiquetaClasificacion.classList.add("text-start");
    etiquetaClasificacion.textContent = "Clasificación: " + enfermedad.clasificacion;

    let etiquetaGrado = document.createElement("h5");
    etiquetaGrado.classList.add("text-start");
    etiquetaGrado.textContent = "Grado: " + enfermedad.grado;

    let etiquetaProbabilidadVivir = document.createElement("h5");
    etiquetaProbabilidadVivir.classList.add("text-start");
    etiquetaProbabilidadVivir.textContent = "Probabilidad de vivir: " + enfermedad.probabilidadVivir;

    // 6. Botón eliminar con icono de basura
    let eliminar = document.createElement("button");
    eliminar.classList.add("btn", "btn-primary", "w-25", "me-2");
    let iconoBasura = document.createElement("i");
    iconoBasura.classList.add("bi", "bi-trash-fill");
    eliminar.appendChild(iconoBasura);

    // 7. Botón editar con icono de lápiz
    let editar = document.createElement("button");
    editar.classList.add("btn", "btn-warning", "w-25");
    let iconoEditar = document.createElement("i");
    iconoEditar.classList.add("bi", "bi-pencil-fill");
    editar.appendChild(iconoEditar);

    // 8. Agregar los elementos a la tarjeta y luego a la columna
    tarjeta.appendChild(etiquetaNombre);
    tarjeta.appendChild(etiquetaIcono);
    tarjeta.appendChild(etiquetaSintomas);
    tarjeta.appendChild(etiquetaClasificacion);
    tarjeta.appendChild(etiquetaGrado);
    tarjeta.appendChild(etiquetaProbabilidadVivir);
    tarjeta.appendChild(eliminar);
    tarjeta.appendChild(editar);
    columna.appendChild(tarjeta);
    filaEnfermedades.appendChild(columna);
});