// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0] ;
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

    var nuevaMatriz = [];

   for(var i = 0; i < array.length; i = i +1){
     nuevaMatriz.push(array[i] + 1);
   }
   return nuevaMatriz;
}
  

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var resultado = '';
  
  for (var i = 0; i < palabras.length; i ++){
    
    if(resultado.length < 1){
      resultado =  palabras[i];
    }else {
      resultado = resultado + ' ' + palabras[i];
    }
  }
    return resultado;
  } 
  


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  if (array.includes(elemento)){

    return true;

  }
  return false;

}



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i = 0; i < numeros.length; i = i+1){
    suma += numeros[i];
  }
  return suma;
}



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var suma = 0;
  for(var i = 0; i < resultadosTest.length; i = i+1){
    suma = suma += resultadosTest[i];
  }
 return suma / resultadosTest.length;
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código: // numeros [1,2,10,5]   devuelva 10

var numeroMayor = 0; // 1, 2, 10 el valor de numeromayor es 10 

  for(var i = 0; i < numeros.length; i++){

   if(numeros[i] > numeroMayor){

    numeroMayor = numeros[i];

   }

  }
  return numeroMayor;
  
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  var acumulador = 1;

 if(arguments.length === 0){
   return 0;
 }
 if (arguments.length === 1){   
   return arguments[0];
 }

 for(var i = 0; i < arguments.length; i = i +1){
   acumulador = acumulador * arguments[i];
  }

  return acumulador;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
 
  var contenedorMayoresa18 = [];

  for(var i = 0; i < arreglo.length; i = i +1){

    if(arreglo[i] > 18){

      contenedorMayoresa18.push(arreglo[i]);

    }
  }
    return contenedorMayoresa18.length;

  }



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 

  if(numeroDeDia === 1 || numeroDeDia === 7){

    return 'Es fin de semana';

  }else if(numeroDeDia > 1 && numeroDeDia < 7){

    return 'Es dia Laboral'
  }

  }

//crear una condicion si dependiendo del codigo que recibe cada dia de la semana cumple o no, y asi mismo


function empiezaConNueve(n) {  
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var numeroString = n.toString();

  if(numeroString[0] == 9){
    return true
  }else {
    return false
  } 
}



function todosIguales(arreglo) { 
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

   var i = 0; 

  if(arreglo[i] !== arreglo[i + 1]){

    return false;

  }else{

    return true
  } 
}
  

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  

  var contenedorMeses = [];

  for(var i = 0; i < array.length; i = i + 1){
   if(array[i]=== "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ){
     contenedorMeses.push(array[i]);
   }
}
if(contenedorMeses.length === 3){
  return contenedorMeses;
}else{
  return "No se encontraron los meses pedidos"
} 
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var nuevoArray = [];

  for(var i = 0; i < 200; i = i +1){
    if(array[i] > 100){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var nuevoArreglo = [];
  var suma = numero; 

  for(var i = 0; i < 10; i++){
    suma = suma + 2; 
    if(suma === i){
      break;
    }else {
      nuevoArreglo.push(suma);
    }
  }
    if(nuevoArreglo.length < 10){
      return "Se interrumpió la ejecución";
    }else if (nuevoArreglo.length === 10){
      return nuevoArreglo; 
    }
  }
  
function continueStatement(numero) { 
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  // numero = 8
  //array = [10,12,14,16,18,  ,20,22,24,26, 28]
  //   key =  0  1 2  3   4  5  6  7  8   9 10

  var arrayNuevo = []; // contenedor de los nuevos valores
  var suma = numero;// 8, 10

  for(var i = 0; i < 10; i = i + 1){

    if(i === 5){
      continue;
    }else {
      suma = suma + 2;
      arrayNuevo.push(suma);
    }
  }
  return arrayNuevo;
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
