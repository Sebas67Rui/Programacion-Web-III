const promesa=new Promise((resolve,reject)=>{
    let num=5;
    if(num>0){
        resolve(num);
    }else{
        reject("Numero invalido");
    }
});

async function ejecutar() {
    try{
        let n=await promesa;
        console.log(n);
        n=n*2;
        console.log(n);
        n=n+10;
        console.log(n);
    }catch(error){
        console.log(error);
    }
}

ejecutar();



