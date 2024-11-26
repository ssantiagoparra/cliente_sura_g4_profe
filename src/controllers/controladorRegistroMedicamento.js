let cajaNombreMedicamento=document.getElementById("nombremedicamento")
let cajaPresentacionMedicamento=document.getElementById("presentacionmedicamento")
let cajaDosisMedicamento=document.getElementById("dosismedicamento")
let cajaLaboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let cajaFechaCaducidadMedicamento=document.getElementById("fechacaducidadmedicamento")
let cajaContraIndicacionesMedicamento=document.getElementById("contraindicacionesmedicamento")
let cajaRegistroInvimaMedicamento=document.getElementById("registroinvimamedicamento")
let cajaTieneCopago=document.getElementById("tienecopago")


let botonRegistroMedicamento=document.getElementById("botonregistromedicamento")

botonRegistroMedicamento.addEventListener("click",function(evento){
    evento.preventDefault()

     let datosFormularioMedicamento={
        nombre:cajaNombreMedicamento.value,
        Presentacion:cajaPresentacionMedicamento.value,
        Dosis:cajaDosisMedicamento.value,
        Laboratorio:cajaLaboratorioMedicamento.value,
        FechaCaducidad:cajaFechaCaducidadMedicamento.value,
        contraIndicaciones:cajaContraIndicacionesMedicamento.value,
        registroInvima:cajaRegistroInvimaMedicamento.value,
        tieneCopago:cajaTieneCopago.value,
        
    }
console.log(datosFormularioMedicamento)

    Swal.fire({
        title: "que bien!",
        text: "Acabas de registrar un medicamento",
        icon: "success"
      });
})