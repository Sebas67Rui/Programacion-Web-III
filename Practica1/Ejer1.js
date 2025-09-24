function contar(cad){

    let a=0,e=0,i=0,o=0,u=0;
    for(let j=0; j<cad.length;j++){
        if(cad[j]=="a"){
            a++;
        }else if (cad[j]=="e") {
            e++;
        } else if(cad[j]=="i"){
            i++;
        }else if(cad[j]=="o"){
            o++;
        }else if(cad[j]=="u"){
            u++;
        }
    }
    
    return{a,e,i,o,u}
}
let obj=contar("hola")
console.log(obj);