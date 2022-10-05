function sumar(a,b){ // a y b son parametros
    console.log(a + b)
}
sumar(20,66); // 20 y 66 son argumentos

function saludar(nombre = 'Desconocido',apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Carlos');