import { medicamentoSimulados } from "../data/simuladorMedicamento.js";

console.log(medicamentoSimulados);

let filaMedicamentos = document.getElementById("filaMedicamentos");

// Debo recorrer los datos de la BD para pintarlos
medicamentoSimulados.forEach(function (medicamento) {
    console.log(medicamento);

    // 1. Creo una columna para cada medicamento 
    let columna = document.createElement("div");
    columna.classList.add("col");

    // 2. Creo una tarjeta para cada medicamento 
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-3", "shadow");

    // 3. Creo una etiqueta para el nombre de cada medicamento
    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center", "fw-bold");
    etiquetaNombre.textContent = medicamento.nombre;

    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src = "../../assets/img/medicamentologo.png"; // Cambia la ruta de la imagen según sea necesario

    let etiquetaPresentacion = document.createElement("h5");
    etiquetaPresentacion.classList.add("text-start");
    etiquetaPresentacion.textContent = "Presentación: " + medicamento.presentacion;

    let etiquetaDosis = document.createElement("h5");
    etiquetaDosis.classList.add("text-start");
    etiquetaDosis.textContent = "Dosis: " + medicamento.dosis + " mg";

    let etiquetaLaboratorio = document.createElement("h5");
    etiquetaLaboratorio.classList.add("text-start");
    etiquetaLaboratorio.textContent = "Laboratorio: " + medicamento.laboratorio;

    let etiquetaFechaCaducidad = document.createElement("h5");
    etiquetaFechaCaducidad.classList.add("text-start");
    etiquetaFechaCaducidad.textContent = "Fecha de caducidad: " + medicamento.fechaCaducidad;

    let etiquetaContraindicaciones = document.createElement("h5");
    etiquetaContraindicaciones.classList.add("text-start");
    etiquetaContraindicaciones.textContent = "Contraindicaciones: " + medicamento.contraindicaciones;

    let etiquetaRegistroINVIMA = document.createElement("h5");
    etiquetaRegistroINVIMA.classList.add("text-start");
    etiquetaRegistroINVIMA.textContent = "Registro INVIMA: " + medicamento.registroINVIMA;

    // Botón eliminar con icono de basura
    let eliminar = document.createElement("button");
    eliminar.classList.add("btn", "btn-primary", "w-25");
    let iconoBasura = document.createElement("i");
    iconoBasura.classList.add("bi", "bi-trash-fill");
    
    // Botón editar con icono de lápiz
    let editar = document.createElement("button");
    editar.classList.add("btn", "btn-warning", "w-25");
    let iconoEditar = document.createElement("i");
    iconoEditar.classList.add("bi", "bi-pencil-fill");
    
    // Agregar los elementos a la tarjeta y a la columna
    eliminar.appendChild(iconoBasura); 
    editar.appendChild(iconoEditar); 
    tarjeta.appendChild(etiquetaNombre);
    tarjeta.appendChild(etiquetaIcono);
    tarjeta.appendChild(etiquetaPresentacion);
    tarjeta.appendChild(etiquetaDosis);
    tarjeta.appendChild(etiquetaLaboratorio);
    tarjeta.appendChild(etiquetaFechaCaducidad);
    tarjeta.appendChild(etiquetaContraindicaciones);
    tarjeta.appendChild(etiquetaRegistroINVIMA);
    tarjeta.appendChild(eliminar);  
    tarjeta.appendChild(editar);    
    columna.appendChild(tarjeta);
    filaMedicamentos.appendChild(columna);
});