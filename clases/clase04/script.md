# React

## Listas y Claves
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

## Eventos
- La forma de manejar los eventos en react es muy similar a como se hace en el DOM o con jQuery.
- React trabaja con eventos sinteticos los cuales son muy similares a los eventos de javascript pero salvan las diferencias entre las distintas implementaciones en cada browser.

### Lista de los eventos más usados

**MOUSE**
onClick onDoubleClick onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp

**KEYBOARD**
onKeyDown onKeyPress onKeyUp

**FORMS**
onChange onInput onSubmit

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

### Ejercicio 9
- Mostrar un solo post en la pantalla no tiene mucho sentido. El cliente me pide si en vez de mostrar 1 solo post podemos mostrar una lista que el nos va a enviar por mail.
- Se pide entonces crear un componente PostList que utilice el componente Post creado en la clase anterior y que reciba por propiedad una lista (array) de posts. Este componente se va a encargar de recorrer el array y convertir cada item del array en un componente Post que va a ser mostrado dentro de la lista.

