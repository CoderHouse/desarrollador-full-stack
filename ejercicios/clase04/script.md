### Listas y Claves
- Cuando queremos crear listas es necesario utilizar algún tipo de loop. En react es muy común utilizar map para lograrlo.

```javascript
class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );    
    return (
        <ul>{listItems}</ul>
    );
  }
}
```
- Es muy importante que usemos keys para identificar cada uno de los elementos de la lista. De esta forma react puede hacer la reconciliación de forma correcta.
- Las claves deben ser únicas dentro de un grupo de nodos hermanos. Por ejemplo: los li dentro de un ul.
- Las claves deben ser únicas en el tiempo. Es decir que el nodo del DOM correspondiente al post 125 sea siempre el mismo. Nombrar ejemplo del file input y los problemas derivados de no usar key.

### Eventos y referencias

**Eventos**
- La forma de manejar los eventos en react es muy similar a como se hace en el DOM o con jQuery.
- React trabaja con eventos sinteticos los cuales son muy similares a los eventos de javascript pero salvan las diferencias entre las distintas implementaciones en cada browser.

Para una lista detallada de todos los eventos soportados por react:
https://facebook.github.io/react/docs/events.html

**Ejemplo:**

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

**Referencias**
- Las referencias son una forma de identificar nodos del DOM reales, es decir, no virtuales.
- Hay muy pocos casos en los que vale la pena utilizarlos: cuando estamos trabajando con librerias que no estan usan react (ej: un plugin de jQuery), para manejar el foco o la selección de texto de un input, 
- Las referencias deben ser declaradas utilizando un callback. Donde el parametro que recibe la función es el elemento en sí.

**Ejemplo**
```javascript
<input type="text" ref={(input) => { textInput = input; }} />
```

### Ejercicio 9
- Crear un componente PostBox que al presionar el enter muestre una alerta.
- Crear un boton clear que me permita borrar el contenido y hacer foco sobre el input.

### Ciclo de vida
Los componentes de react tienen un ciclo de vida. 

**Iniciales**
Metodos que van a ser llamados antes y hasta que el componente esta dentro del DOM:

```javascript
constructor() //cuando un componente es instanciado.
componentWillMount() // Justo antes de meter el componente en el DOM.
render() // Cuando se renderiza el componente.
componentDidMount() // Cuando el componente ya esta montado en el DOM.
```

**Actualizacion**
Los siguientes van a ser llamados cuando cambie el estado o las propiedades.

```javascript
componentWillReceiveProps() // Justo antes que el componente reciba las props.
shouldComponentUpdate() // Saber si el componente debe ser actualizado.
componentWillUpdate() // Antes de actualizar el componente en el DOM.
render() // Cuando se renderiza el componente.
componentDidUpdate() // Cuando el componente se actualizó en el DOM.
```

**Destrucción**
Cuando un componente va a ser removido del DOM:

```javascript
componentWillUnmount() // Cuando el componente se va a remover del DOM.
```

### Ejercicio 10
- Crear un componente FluidImage que actualice el tamaño de la misma de acuerdo al tamaño de la ventana.

```javascript
const handler = (e) => {
    const height = e.target.innerHeight;
    const width = e.target.innerHeight;
};
window.addEventListener('resize', handler);
window.removeEventListener('resize', handler);
```
- Agregar un boton que permita remover la instancia de FluidImage

### Statefull vs Stateless components
- Todos los componentes que vimos hasta el momento se llaman statefull components. Esto quiere decir que contienen un estado interno que cambia de acuerdo a la lógica implementada dentro del componente.
- A diferencia de los anteriores los componentes stateless no tienen un estado interno sino que son renderizados utilizando solamente las propiedades que le son provistas.
- Esto quiere decir que siempre que le pasemos las mismas propiedades a un componente stateless va a renderizar exactamente lo mismo en pantalla.
- En cambio, los componentes statefull pueden (o no) mostrar distintos resultados en base al estado actual del componente.

**Cómo crear un componente stateless**

```javascript
const Text = (props) => <p>{props.children}</p>;
```

- Cuando veamos redux vamos a ver a donde va a parar la lógica de mi aplicación.

### Ejercicio 11
- Se necesita listar una serie de posts en una página así como también una forma de poder agregar nuevos posts.

**Requerimientos**
- Los posts tienen que estar ordenados de forma tal que el último creado apareza primero en la pantalla.
- Los posts deben poder eliminarse;
- Puenden agregarse nuevos posts.