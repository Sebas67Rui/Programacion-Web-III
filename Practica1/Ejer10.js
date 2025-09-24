//¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una promesa?
function saludo(mensaje,callback){
    console.log(mensaje);
    callback();
}

const m=()=>{
    console.log("CALLBACK EJECUTANDO");
}
saludo("Hola",m)
//El callback es un argumento que se ejecuta con relacion a cierto proceso


const promesa=new Promise((resolve,reject)=>{
    if(true){
        resolve("Mensaje con Exito");
    }else{
        reject("Mensaje Erroneo");
    }
});

promesa.then((exito)=>{
    console.log(exito);
}).catch((error)=>{
    console.log(error);
})
/*Las promesas representan una operacion que
dependiendo el caso terminara con exito o error*/
