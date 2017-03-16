### Qué es React
- Es una librería para crear interfaces. 
- Esta basada en componentes

### Instalación
- Tipear node en la consola y en el caso de no tenerlo descargar https://nodejs.org/en/download/
- Instalar create-react-app: `npm install -g create-react-app`
- Crear un proyecto y explicar la estructura

### Virtual DOM
- Que es el DOM? Document Object Model
`document.querySelectorAll('*')`
- En lugar de hacer las modificaciones manualmente con el vdom podemos decir de que forma queremos que las cosas esten y mediante un algoritmo calcular los cambios minimos que se deben realizar sobre el DOM real para alcanzar ese estado.
- El Virtual DOM es una versión mucho más liviana y simplificada del DOM que le permite a React tener una representación interna para luego en base al estado calcular las diferencias y aplicar los updates sobre el DOM real.
- La mayoría de los nodos que es posible crear usando el DOM tienen su análogo ReactElement. 
- A diferencia de los componentes que ya veremos los ReactElements no tienen un estado interno y tal como ocurre con los elementos del DOM su visualización esta determinada por las propiedades que recibe.

### Reconciliación
- Es el proceso de actualizar la UI para que concuerde con el estado actual de mi aplicación.
- Cuando un componente cambia es marcado para ser actualizado junto con sus hijos. 
- Se calculan las diferencias entre el VDOM tree previo y el VDOM tree actual y se generan una lista de updates para ser aplicados en el DOM real.

https://facebook.github.io/react/docs/dom-elements.html

### Como crear un componente
- Las aplicaciones que usan react se encuentran basadas en componentes. 
- De la misma forma que un documento html empieza con una etiqueta html, una aplicación de react comienza por un componente global y luego se pueden ir anidando dentro de este nuevos componentes.
- Los componentes pueden ser vistos como funciones que reciben como parametro un estado y retornan algo listo para ser renderizado en la página.

```javascript
class ButtonPrimary extends Component {
    render() {
        return (
            <button className="btn btn-primary">{this.props.text}</button>
        );
    }
}

```
- Cabe destacar que para especificar las clases es necesario utilizar el attributo className. Class es una palabra reservada en javascript y por lo tanto no puede ser utilizada.

```javascript
class App extends Component {
  render() {
    return (
        <ButtonPrimary text="Apretame"/>
    );
  }
}
```
### State vs Props
- La principal diferencia entre estos dos conceptos es que el estado es interno del componente mientras que las propiedades les son provistas desde afuera al componente. 
- Otra diferencia es que mientras el estado es mutable las propiedades no.
- Nunca debemos asignar propiedades dentro de un componente.
- Nunca debemos cambiar el estado de un componente sin usar setState.
- Explicar como pasar propiedades

### JSX
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
- Crear un componente post que reciba como propiedades que reciba como propiedades el texto y el nombre del autor. 
- Mostrar en la página un post.

