const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const { nombre } = producto;

console.log(nombre);

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50]
console.log([...numeros]);


const [valor1,valor2,...tercero] = numeros;
console.log(tercero)
