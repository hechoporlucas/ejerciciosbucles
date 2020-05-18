let age = parseInt(prompt("Ingrese su edad."));

if(age >= 18 && age < 100){
    document.write("Usted puede conducir.");
}else if(age < 18){
    document.write("Usted tiene menos de 18 años, no puede conducir.");
}else{
    document.write("La edad o los caracteres son invalidos.");
}