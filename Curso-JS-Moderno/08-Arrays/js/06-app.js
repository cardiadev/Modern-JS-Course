/* const meses = ['Enero', 'Febrero', 'Marzo'];

meses.push('Abril')
meses.push('Mayo')

console.table(meses); */

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400,
    numero: 1
}
const producto2 = {
    nombre: "Celular",
    precio: 800,
    numero: 2
}

const producto3 = {
    nombre: "Teclado",
    precio: 50,
    numero: 3
}


let resultado;
resultado = [...carrito, producto]

resultado =[...resultado, producto2]
resultado =[producto3, ...resultado]

console.table(resultado);