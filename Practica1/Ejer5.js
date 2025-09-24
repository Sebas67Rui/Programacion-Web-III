function palindromo(cadena){
    let cad="";
    for(let i=cadena.length-1;i>=0;i--){
        cad=cad+cadena[i];
    }
    return cad==cadena;
}
let band=palindromo("oruro");
console.log(band);
band=palindromo("hola");
console.log(band);