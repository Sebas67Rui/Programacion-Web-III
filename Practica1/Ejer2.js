function invierta(cad){
    let inv="";
    for(let i=cad.length-1; i>=0;i--){
        inv=inv+cad[i];
    }
    return inv;
}
let palabra=invierta("abcd");
console.log(palabra);