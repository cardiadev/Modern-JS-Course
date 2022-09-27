const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

carrito.forEach( function(producto){
    console.log("forEach",`${producto.nombre} - Precio: ${producto.precio}`);
})

carrito.map( function(producto){
    console.log("Map",`${producto.nombre} - Precio: ${producto.precio}`);
})