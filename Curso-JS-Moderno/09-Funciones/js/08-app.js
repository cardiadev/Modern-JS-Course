function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2,3);

console.log(resultado);

// Ejemplo más avanzado

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){

}

total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(300);

console.log(total)