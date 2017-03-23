# React

## Qué es React
- Es una librería para crear interfaces. 
- Esta basada en componentes

## Instalación
- Tipear node en la consola y en el caso de no tenerlo descargar https://nodejs.org/en/download/
- Instalar create-react-app: `npm install -g create-react-app`
- Crear un proyecto y explicar la estructura

## Virtual DOM
- Que es el DOM? Document Object Model
`document.querySelectorAll('*')`
- En lugar de hacer las modificaciones manualmente con el vdom podemos decir de que forma queremos que las cosas esten y mediante un algoritmo calcular los cambios minimos que se deben realizar sobre el DOM real para alcanzar ese estado.
- El Virtual DOM es una versión mucho más liviana y simplificada del DOM que le permite a React tener una representación interna para luego en base al estado calcular las diferencias y aplicar los updates sobre el DOM real.
- La mayoría de los nodos que es posible crear usando el DOM tienen su análogo ReactElement. 
- A diferencia de los componentes que ya veremos los ReactElements no tienen un estado interno y tal como ocurre con los elementos del DOM su visualización esta determinada por las propiedades que recibe.

## Como crear un componente
- Las aplicaciones que usan react se encuentran basadas en componentes. 
- De la misma forma que un documento html empieza con una etiqueta html, una aplicación de react comienza por un componente global y luego se pueden ir anidando dentro de este nuevos componentes.
- Los componentes pueden ser vistos como funciones que reciben como parametro un estado y retornan algo listo para ser renderizado en la página.
- Para crear un componente tenemos que asegurarnos que la librería de react este correcamenete importada en el archivo en el cual vamos a declarar nuestro componente.

```javascript
import React, { Component } from 'react';
export default class ButtonPrimary extends Component {
    render() {
        return (
            <button className="btn btn-primary">{this.props.text}</button>
        );
    }
}
```
- Para usar un componente no debemos olvidar importarlo primero usando la sentencia import.

```javascript
import React, { Component } from 'react';
import ButtonPrimary from './ButtonPrimary';
export default class App extends Component {
  render() {
    return (
        <ButtonPrimary text="Apretame"/>
    );
  }
}
```
### Ejercicio/Práctica
Revisar con la clase la estructura de carpetas creada por la app create-react-app. Mostrar como cada componente es creado. Explicar importación y exportación en javascript.

## State vs Props
- La principal diferencia entre estos dos conceptos es que el estado es interno del componente mientras que las propiedades les son provistas desde afuera al componente. 
- Otra diferencia es que mientras el estado es mutable las propiedades no.
- Nunca debemos asignar propiedades dentro de un componente.
- Nunca debemos cambiar el estado de un componente sin usar setState.
- Explicar como pasar propiedades

## JSX
- Cada Elemento JSX es solo una forma distinta de escribir React.createElement.
- El browser no sabe como interpretar JSX.
- El acto de convertir JSX en javascript se llama transpilación.
- Cada nodo de JSX puede ser o un ReactElement (div, p, strong, li) o un componente (ButtonPrimary)
- Render siempre debe devolver 1 solo nodo. 

Es decir que esto no es posible:
```javascript
class App extends Component {
    render() {
        return (
            <div>Hello</div>
            <div>World</div>
        );
    }    
}
```
Para evitar el error debemos envolver a los dos elementos dentro de otro:
```javascript
class App extends Component {
    render() {
        return (
            <span>
                <div>Hello</div>
                <div>World</div>
            </span>
        );
    }    
}
```

### Ejercicio 8
- Crear un componente post que reciba como propiedades que reciba como propiedades el titulo y la bajada. 
- Mostrar en la página un post.

