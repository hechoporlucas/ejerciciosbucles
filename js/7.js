//pedir un numero...
let user = parseInt(prompt("Introduce un numero menor o igual a 50."));
//si es un numero entre 0 y 50...
if (user > 0 && user <= 50) {
    //mientras sucede eso, quiero imprimir desde el  numero mas alto al mas bajo...
    //tengo que definir primero las variables i y repeticiones
    let i, repe;
    //i tiene que ser igual a el numero que el usuario ingreso, es un numero mayor o igual q 1 y va decreciendo de a 1... mientras pase eso quiero que me imprima saltos de linea
    for (i = user; i >= 1; i--) {
        for (repe = i; repe >= 1; repe--) {
            //numero que se repite i veces
            document.write(i);
        }
        document.write("<br>-");
    }
} else {
    document.write("Introduce un numero valido.");
}
