function obtenerUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // cambia a false para simular error
      if (exito) {
        resolve({ id: 1, nombre: "Sebastián" });
      } else {
        reject("No se pudo obtener el usuario");
      }
    }, 1000);
  });
}

obtenerUsuario()
  .then((usuario) => {
    console.log("Usuario obtenido:", usuario);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

async function mostrarUsuario() {
  try {
    const usuario = await obtenerUsuario(); // espera a que la promesa se resuelva
    console.log("Usuario obtenido:", usuario);
  } catch (error) {
    console.log("Error:", error);
  }
}
mostrarUsuario();