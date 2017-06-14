var ancho = 0;

module.exports.setLado = function (width) {
    ancho = width;
};

module.exports.area = function () {
    return ancho*ancho;
};

module.exports.perimetro = function () {
    return 4*ancho;
};