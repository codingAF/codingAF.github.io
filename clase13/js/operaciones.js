/* codigo en js*/
//comentario en js
function Saludar() {
    alert('Hola mundo');
    //otras lineas
}


/*OPERADORES*/
//CUENTAS MATEMATICAS
/* listados debajo
+
-
/
*
*/

console.log(1+2);

//variable
/* uso let para definir en js*/
/* EJ: let op=1 */

let op1 = prompt('Ingrese el valor de op1'); //OJO ingresa el valor como string o cadena
// '1'+ 2 = '12'
// para transformar la cadena en un numero como realmente es, coloco un + adelante de la variable o parseInt()
let op2 = prompt('Ingrese el valor de op2');
let res= (+op1) + parseInt(op2);

//ahora muestro el resultado por consola

//console.log(res);

//POR ALERTA
alert('resultado='+ res);