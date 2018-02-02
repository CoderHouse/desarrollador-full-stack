# ES2015

## Nivelación
- Closures
- Local and global scope
- Hoising
- Event loop
- Sync / Async
- Para que sirve this
- Un breve repaso de orientación a objetos

```javascript
function createUser() {
  
  // BIEN
  var name = 'Eugenio';

  // MAL
  surname = 'Valeiras';
  
  // MAL
  window.people = 1;
  function printName() {
    console.log(name);
  }
  name = 'Pedro'
  printName();
}

mainFunction();
console.log(name);
console.log(surname);
console.log(window.surname);
```

## Let y const

Let a diferencia de var es block scoped lo que significa que si está definida dentro de `{}` no puede ser referenciada desde fuera.

### Ejemplo con let
```javascript

// ERROR: "ReferenceError: name is not defined
if(true) {
  let name = 1;
}
console.log(name);


// BIEN
let name;
if(true) {
    name = 1;
}
console.log(name);
```

Igual que let, const tambien es block scoped. 

### Ejemplo con const
```javascript

// ERROR: "TypeError: Assignment to constant variable.
const p = 1;
p = 10;

// BIEN, YA QUE LO QUE NO SE PUEDE MODIFICAR EL LA REFERENCIA DE LA VARIABLE 
const obj = {};
obj.name = 1;

// AUNQUE: "TypeError: Assignment to constant variable.
obj = {};
```

Como regla general usar const siempre que no necesitemos reasignar un valor al identificador y let cuando si necesitemos reasignar. Podemos (y probablemente debamos) descartar el uso de var al escribir ES2015.

### Ejercicio 1
- ¿Qué es el scope?
- ¿Qué es un closure?
- ¿Cuál es la diferencia entre let y var?
- ¿Qué es el hoising?
- ¿Para que sirve const?

## Arrow functions
- Una nueva sintaxis para definir funciones
- No crean un nuevo closure, en otras palabras this hace referencia a la función más proxima hacia arriba en la jerarquía.

### Sintaxis
```javascript
(param1, param2, …, paramN) => { 
    ... 
}

// ESTA FUNCION:
(param1, param2, …, paramN) => {
    return expression;
}

// PUEDE SER ESCRITA DE ESTA MANERA, QUITANDO LOS CORCHETES EL RETURN ES IMPLICITO
(param1, param2, …, paramN) => expression

// Y SI QUISIERAMOS PODEMOS RETORNAR UN OBJETO DE LA SIGUIENTE MANERA
(param1, param2, …, paramN) => ({
    bla: 'bla bla'
})

// SI LA FUNCION TIENE UN SOLO PARAMETRO PODEMOS OMITIR LOS PARENTECIS.
(singleParam) => { statements }
singleParam => { statements }

// SI LA FUNCION NO TIENE PARAMENTROS SIEMPRE DEBEMOS PONER LOS PARENTESIS.
() => { statements }
() => expression
```

### Casos de uso diferente sintaxis

```javascript

const isPair = (num) => {
    return num % 2 === 0;
};

// O ASÍ
const isPair = num => {
    return num % 2 === 0;
};

// O ASÍ
const isPair = num => num % 2 === 0;

// PERO SI QUIERO MÁS DE UN STATEMENT
const isPair = num => {
    console.log('Loading...');
    return num % 2 === 0;
};
```

### Como cambia this
```javascript

function Car(model, color) {
    this.color = name;
    this.model = model;
    var printModel = function() {
        // Prints: undefined undefined
        // Esto se debe a que el this apunta a la funcion mas proxima o sea al printModel
        console.log(this.name + ' ' + this.model);
    }
    printModel();
}

let car = new Car('Peugeot', 'gris');

// PERO con aroy functions
function Car(name, model) {
    this.name = name;
    this.model = model;
    var printModel = () => {
        // Ahora en este punto podemos acceder al this de la funcion;
        console.log(this.name + ' ' + this.model);
    }
    printModel();
}

let car = new Car('BMW', 'Azul');
```

### Ejercicio 2
- Crear una función constructora llamada `User` que tenga las siguientes propiedades privadas: userId (Integer), username (string), name (string), surname(string) y posts (array). Asimismo debe contar con un metodo publico para obterner todos los posts del usuario.

## String Templates
- Interpolación
- Multiline
- Strings como funciones

### Ejercicio 3
Tomando como base el ejercio anterior usar template strings para obtener el nombre de usuario junto con la cantidad the posts que publicó. Ej: topicus1 (77)
