// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:


    class Usuario {
  constructor(opciones) {

    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
    this.saludar = function(){

      return 'Hola, mi nombre es ' + this.nombre;

    }

   }   
 }

     return Usuario;
}
      
 
  /* Puedo contruir la funcion de dos forma, la actual o la ES6, ese aceptar se refiere a que viene por argumento
  debo poner las propiedes y me dan el nombre de cada una, despues con el prototype creo mi metodo saludar y
  devolver lo que me piden un condenado, return la clase */



function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

  Constructor.prototype.saludar = function(){
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  // string = h  o  l  a
  //invertido a  l  o  h
  //      key 3  2  1  0

  String.prototype.reverse = function(){

    var stringInvertido = '';

    for(var i = this.length - 1; i >= 0; i --){
      stringInvertido = stringInvertido + this[i]
    }

    return stringInvertido;
  } 
     
  }
  
  
  



// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
    /*Escribir los argumentos que recibe el constructor*/
    //Crea el contructor

    class Persona{
      constructor(nombre, apellido, edad, domicilio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
        this.detalle = function(){
          return {
            nombre:  this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            domicilio: this.domicilio
          }
        }
      }
    }
    


function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  var persona = new Persona("Juan", "Perez", 22, "Saavedra 123");
  return persona;

}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
 
  Persona.prototype.datos = function(){
    return this.nombre + ','+ ' ' + this.edad + ' años';
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
