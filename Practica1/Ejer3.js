function vector(numeros){
    let pares=[]; let impares=[];
    for(let i=0; i<numeros.length;i++){
        if(numeros[i]%2==0){
            pares.push(numeros[i]);
        }else{
            impares.push(numeros[i]);
        }
    }
    return{pares,impares}
}
let obj=vector([3,1,5,4,2]);
console.log(obj)