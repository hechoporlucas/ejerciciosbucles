//el usuario define un numero...
let user = parseInt(prompt("Ingrese un numero menor o igual a 50."));

//el numero tiene que estar entre 1 y 50...
if(user > 0 && user <= 50){
    //definir un bucle que forme una piramide para eso necesito dos variables
    let i,repe;
    for(i=0; i<=user; i++){
        for(repe=1; repe<=i; repe++){
            document.write(repe)
        }
        document.write("<br>");
    }
}
