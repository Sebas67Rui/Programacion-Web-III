//Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.
const promesa=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(() => {
            resolve("Exito");
        }, 2000);
    }else{
        reject("Error");
    }
});

promesa.then((exito)=>{
    console.log(exito);
}).catch((error)=>{
    console.log(error);
})