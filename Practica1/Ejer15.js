//Funcion Callback
function obtenerDatosCallback(callback) {
  setTimeout(() => {
    const exito = true;
    if (exito) {
      callback(null, "Datos obtenidos correctamente"); // éxito
    } else {
      callback("Error al obtener datos"); // error
    }
  }, 1000);
}

//Convertir el callback en promesa
function obtenerDatosPromesa() {
  return new Promise((resolve, reject) => {
    obtenerDatosCallback((err, datos) => {
      if (err) {
        reject(err);      
        resolve(datos);
      }
    });
  });
}


obtenerDatosPromesa()
  .then((datos) => console.log("Éxito:", datos))
  .catch((err) => console.log("Error:", err));
