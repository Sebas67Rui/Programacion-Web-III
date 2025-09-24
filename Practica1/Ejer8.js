//Realizar un código para ejecutar una función callback después 2 segundos.
const funcion=(mensaje,callback)=>{
    setTimeout(()=>{
        console.log(mensaje);
        callback();
    },2000)
}
const m=()=>{
    console.log("Ejecutando");
}

funcion("Hola",m);