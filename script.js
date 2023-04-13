alert("Desde aquí, con 2 números, realizaremos diversas operaciones")
let num1 = parseFloat(prompt("Por favor, introduzca el primer número: "));

let num2 = parseFloat(prompt("Ahora, introduzca el segundo número: "));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : "ERROR.";

alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
alert("El resultado de la multiplicación es: " + multiplicacion);
alert("El resultado de la división es: " + division);
