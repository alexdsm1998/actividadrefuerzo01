var num=prompt('Introduzca un numero par');
var num1=prompt('Introduzca otro numero par');

while ((num!=num1) && ((num%2)==0) && ((num1%2)==0)) {
  alert('ENHORABUENA!!los numeros son pares y son distintos')
}
 while (((num%2)==0) && ((num1%2)==0) && (num==num1)) {
  alert('son pares pero son iguales')
  var num=prompt('Introduzca un numero par');
  var num1=prompt('Introduzca otro numero par');
}
while (((num%2)!==0) && ((num1%2)!==0) && (num==num1)) {
  alert('no son pares y son iguales')
  var num=prompt('Introduzca un numero par');
  var num1=prompt('Introduzca otro numero par');
}
