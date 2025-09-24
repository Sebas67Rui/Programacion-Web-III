//Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible
function Leerdatos(callback){
    setTimeout(()=>{
        console.log("Datos leidos");
        callback("Datos")
    },1000);
}

function proceso(datos,callback){
    setTimeout(() => {
        console.log("procesando: ",datos)
        callback("datos procesados");
    },1000);
}

function guardar(datos,callback) {
    setTimeout(() => {
        console.log("Guardando:",datos);
        callback("Guardado con exito");
    }, 1000);
}

Leerdatos((res)=>{
    proceso(res,(res2)=>{
        guardar(res2,(res3)=>{
            console.log(res3);
        });
    });
});
