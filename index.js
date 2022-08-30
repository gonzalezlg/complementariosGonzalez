//Desafio complemaentario - Crear algoritmo utilizando un ciclo

// El usuario ingresará numeros positivos mediante un prompt en a los cuales se íra sumando, pero finalizar se debe ingresar un numero negativo
// Una vez que ingrese un numero negativo, se mostrará por consola el resultado de los numero ingresados
//Tambien se informa la cantidad de numeros que ingreso

let resultado =0;
let contador =0;
let input = parseInt(prompt("Ingrese un numero, para finalizar ingrese un numero negativo"));

while (input > 0) {

    resultado += input;
    contador ++;
    input = parseInt(prompt("Ingrese un numero, para finalizar ingrese un numero negativo"));
}

console.log("El resultado de la suma de los numeros ingresados es igual a " + resultado);
console.log('Ingreso ' + contador + ' numeros');
