let nota = parseInt(prompt("Ingrese una nota:"));

if(nota >= 0 && nota <= 2){
    alert("Muy deficiente.");
}
else if(nota >= 3 && nota <= 4){
    alert("Insuficiente.");
}
else if(nota >= 5 && nota <= 6){
    alert("Suficiente.");
}
else if(nota == 7){
    alert("Bien.");
}
else if(nota >= 8 && nota <= 9){
    alert("Notable");
}
else if(nota == 10){
    alert("Excelente.");
}
else if(nota < 0 || nota > 10){
    alert("Numero erroneo.");
}
else{
    alert("Introduce un numero valido.");
}