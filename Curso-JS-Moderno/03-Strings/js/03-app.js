const producto = "Monitor 20 Pulgadas";
const precio = "30 USD";

// concat funciona para concatenar strings

console.group("%c Usando metodo concat", "color:yellow; background-color:blue; font-size:18px")
    console.log(producto.concat(precio));
    console.log(producto.concat('En descuento'));
console.groupEnd()


console.log(producto + " con un precio de: " + precio)

// Concatenando de forma anterior
console.log("El producto " + producto + " tiene un precio de: " + precio);

console.log("El producto " , producto , " tiene un precio de: " , precio);

// En ES6 se agrego template strings o template literals
console.log(`El producto ${producto} tiene un precio de: ${precio}`);