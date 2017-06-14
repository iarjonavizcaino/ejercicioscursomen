var cadena;
var vocales;

module.exports.setCadena = function (cad) {
    cadena = cad;
}

module.exports.palindromo = function () {
    /*console.log(cadena.toLowerCase().replace(/\s/g,""));
    console.log(cadena.toLowerCase().split('').reverse().join('').replace(/\s/g,""));*/
    return cadena.toLowerCase().replace(/\s/g,"") == cadena.toLowerCase().split('').reverse().join('').replace(/\s/g,"");
}

module.exports.palabras = function() {
    return cadena.split(' ').length;
}

module.exports.letras = function() {
    return cadena.replace(/\s/g,"").split('').length;
}

module.exports.vocales = function () {
    vocales = 0;
    for (var i = 0; i < cadena.length; i++) {
        switch (cadena.charAt(i)) {
            case "a":
                vocales++;
                break;
            case "e":
                vocales++;
                break;
            case "i":
                vocales++;
                break;
            case "o":
                vocales++;
                break;
            case "u":
                vocales++;
                break;
        }
    }
    return vocales;
}

module.exports.consonantes = function() {
    return cadena.replace(/\s/g,"").split('').length - vocales;
}