
function obtenerDatos(callback) {

    setTimeout(() => {
        const exito = true;
        if (exito) {
            callback(null, "Datos obtenidos correctamente"); 
        } else {
            callback("Error al obtener datos");
        }
    }, 1000);
}

obtenerDatos((err, datos) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Éxito:", datos);
    }
});
