"use strict";
var forma = document.getElementById("forma"),
        salida = document.getElementById("salida"),
        sexos = document.getElementsByName("sexo");

 

forma.addEventListener("submit", cotiza, false);

 

function cotiza() {
    var camisetaVerde = forma["camisetaVerde"].checked,
            dia = forma["dia"].value,
            edad = forma["edad"].value,
            cotizacion = 1000.0;
    if (camisetaVerde) {
        cotizacion = cotizacion - 100;
    }
    switch (dia) {
        case "Viernes":
            cotizacion = cotizacion - 100;
            break;
        case "Domingo":
            cotizacion = cotizacion - 200;
    }
    switch (edad) {
        case "NINHO":
        case "ADOLESCENTE":
        case "JOVEN":
            cotizacion = cotizacion - 100;
            break;
        case "TERCERA_EDAD":
            cotizacion = cotizacion - 150;
    }
    for (var i = 0, total = sexos.length; i<total; i++) {
        var sexo = sexos[i];
        if (sexo.checked && sexo.value === "femenino"){
            cotizacion = cotizacion - 100;
            
        }
    } 
    salida.innerHTML = "<dfn>Cotización:$</dfn>"+cotizacion+".00";
}
