import { medicoSimulados } from "../data/simuladorMedico.js";

import {consultarMedico} from "../services/serviciosMedico.js"

consultarMedico()
.then(function(respuestaBack){

let filaMedicos = document.getElementById("filaMedicos");

// Recorre los datos de la BD para pintarlos en el dashboard
respuestaBack.forEach(function (medico) {
    console.log(medico);

    // 1. Crear una columna para cada médico
    let columna = document.createElement("div");
    columna.classList.add("col");

    // 2. Crear una tarjeta para cada médico
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-3", "shadow");

    // 3. Crear una etiqueta para el nombre del médico
    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center", "fw-bold");
    etiquetaNombre.textContent = medico.nombre;

    // Agregar imagen de icono para cada médico
    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src = "../../assets/img/medicologo.png"; // Cambia la ruta de la imagen si es necesario

    // Agregar especialidad
    let etiquetaEspecialidad = document.createElement("h5");
    etiquetaEspecialidad.classList.add("text-start");
    etiquetaEspecialidad.textContent = "Especialidad: " + medico.especialidad;

    // Agregar matrícula
    let etiquetaMatricula = document.createElement("h5");
    etiquetaMatricula.classList.add("text-start");
    etiquetaMatricula.textContent = "Matrícula: " + medico.matricula;

    // Agregar salario
    let etiquetaSalario = document.createElement("h5");
    etiquetaSalario.classList.add("text-start");
    etiquetaSalario.textContent = "Salario: $" + medico.salario.toLocaleString();

    // Agregar IPS
    let etiquetaIPS = document.createElement("h5");
    etiquetaIPS.classList.add("text-start");
    etiquetaIPS.textContent = "IPS: " + medico.ips;

    // Agregar correo
    let etiquetaCorreo = document.createElement("h5");
    etiquetaCorreo.classList.add("text-start");
    etiquetaCorreo.textContent = "Correo: " + medico.correo;

    // Agregar teléfono
    let etiquetaTelefono = document.createElement("h5");
    etiquetaTelefono.classList.add("text-start");
    etiquetaTelefono.textContent = "Teléfono: " + medico.telefono;

    // Agregar dirección
    let etiquetaDireccion = document.createElement("h5");
    etiquetaDireccion.classList.add("text-start");
    etiquetaDireccion.textContent = "Dirección: " + medico.direccion;

    // Agregar disponibilidad de fin de semana
    let etiquetaDisponibilidad = document.createElement("h5");
    etiquetaDisponibilidad.classList.add("text-start");
    etiquetaDisponibilidad.textContent = "Disponible fines de semana: " + (medico.estadisponiblefindesemana ? "Sí" : "No");

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
    tarjeta.appendChild(etiquetaEspecialidad);
    tarjeta.appendChild(etiquetaMatricula);
    tarjeta.appendChild(etiquetaSalario);
    tarjeta.appendChild(etiquetaIPS);
    tarjeta.appendChild(etiquetaCorreo);
    tarjeta.appendChild(etiquetaTelefono);
    tarjeta.appendChild(etiquetaDireccion);
    tarjeta.appendChild(etiquetaDisponibilidad);
    tarjeta.appendChild(eliminar);
    tarjeta.appendChild(editar);
    columna.appendChild(tarjeta);
    filaMedicos.appendChild(columna);
});

})