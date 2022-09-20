/* const meses = ['Enero', 'Febrero', 'Marzo'];

meses.push('Abril')
meses.push('Mayo')

console.table(meses); */

const carrito = [];

// Definir un producto
const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};
const producto2 = {
  nombre: "Celular",
  precio: 800,
};

// Agrega elementos al final de un array
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
  precio: 50,
};

const producto4 = {
    nombre: "Celular 2",
    precio: 3000,
};

// Agrega elementos al final de un array
carrito.push(producto3);
carrito.push(producto4);


/* // Agrga elementos al inicio de un array
// carrito.unshift(producto3);
console.table(carrito);

// Eliminar ultimo elemento del arreglo
carrito.pop();
console.table(carrito);

// Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito); */


console.table(carrito);

carrito.splice(1,1)
console.table(carrito);