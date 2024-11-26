export async function guardarSignoVital(datosSignoVital) {
    const URL="http://localhost:8080/api/signovital"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosSignoVital)
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()
    console.log("me voy pal back")

    return respuestaFinal
}

export async function consultarSignosVitales() {
    //1. para dinde voy - URL del servicio
    const URL="http://localhost:8080/api/signovital"

    //2. que vas a hacer ahi - configuro la peticion
    let peticion={
        method:"GET"
    }

    //3. Arranque pues mijo - Consuma el API
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal
}