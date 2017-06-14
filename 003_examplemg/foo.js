var square = require("./square");

square.setLado(3);
var area = square.area();
var perimetro = square.perimetro();

console.log("El área es "+area);
console.log("El perímetro es "+perimetro);