# Redux
Es una librería creada para controlar el estado de nuestra aplicación. En una aplicación pequeña el manejo del estado puede no parecer gran cosa pero cuando la aplicación crece se hace cada vez más difícil saber donde algo esta fallando para poder corregirlo. 

## State
El estado es un objeto inmutable que contiene toda la información necesaria de nuestra aplicación.

Algunos ejemplos de los datos que van a almacenarse en el estado puden ser: la lista de posts, el texto que contiene cada input de un formulario, cuantos usuarios leyeron un post, etc.

## Flujo de datos
Los datos siempre fluyen de forma **unidireccional**. 
- Se despacha una acción usando el store
- Se llama al root reducer que es una función que toma como parametro el estado inicial y devuelve el nuevo estado.
- El estado es guardado y fuerza un nuevo renderizado.
- El estado deciendo en cascada en forma de propiedades hacia los componentes más anidados.

## Principios
- Single source of truth
- El estado es de solo lectura
- Los cambios se hacen mediante funciones puras

## Acciones
Las acciones son objetos de javascript que indican el tipo de acción que se produjo y toda la información que necesita el reducer para modificar el estado de la aplicación.

```javascript
{
    type: 'ADD_TODO',
    text:'Aprender Redux',
}
```

## Reducer e inmutabilidad
Los reducers son funciones puras (no producen efectos colaterales) que crean un nuevo estado de la aplicación en respuesta a una acción. Los reducers nunca deben modificar el estado de la aplicación sino crear uno nuevo basandose en el estado anterior y en el tipo de acción que ocurrió.


```javascript
const posts = (state = 0, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return state + 1;
  }
  return state;
};
```

## Como evitar mutar el estado
Para evitar la mutación del estado tenemos que utilizar operaciones que no produzcan efectos secundarios. 

Si se trata de una array tenemos que prestar mayor atención ya que varios de los métodos de la clase array producen efectos colaterales. Por ejemplo: push, shift, splice, unshift, pop. Por otro lado slice, concat y el operador ... no generan efectos colaterales.

```javascript
let a = [3,3,6];
a.slice() // [3,3,6]
a.concat([5,9]) // [3,3,6,5,9];
[...a, ...[3,3,6,5,9], 1, 19] // Igual que concat
```

En el caso de los objetos debemos utilizar el método assign de la clase Object y pasarle como parametro un objeto vació para copiar otros objetos dentro de él.

```javascript
Object.assign({}, {title: 'This is a title'}, {body: 'this is a body'});
```

## Ejemplo de contador
https://github.com/reactjs/redux/blob/master/examples/counter-vanilla/index.html

## Ejercicio 14
- Utilizando como base el ejemplo del contador crear una calculadora que me permita: sumar, restar, multiplicar y dividir.
- La calculador constará de un input para introducir un nuevo operando, 4 botones (multiplicar, dividir, sumar y restar) y un div donde se mostrará el resultado. 
- Por ejemplo: el estado inicial es 0, introduzco el valor dos en el operando y presiono +, el estado pasa a ser 2. Luego coloco 3 y presiono x entonces el nuevo resultado es 6.

