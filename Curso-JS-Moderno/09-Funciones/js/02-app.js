// Declaracion de Funcion ( Function Declaration )
// SI FUNCIONA CON HOISTING


sumar()
function sumar(){
    console.log(2 + 2)
}

// Expresion de Funcion ( Function Expression )
// NO FUNCIONA CON HOISTING

sumar2()
const sumar2 = function(){
    console.log(3+3);
}