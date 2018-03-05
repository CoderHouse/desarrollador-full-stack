# React

## Referencias
- Las referencias son una forma de identificar nodos del DOM reales, es decir, no virtuales.
- Hay muy pocos casos en los que vale la pena utilizarlos: cuando estamos trabajando con librerias que no estan usan react (ej: un plugin de jQuery), para manejar el foco o la selección de texto de un input, 
- Las referencias deben ser declaradas utilizando un callback. Donde el parametro que recibe la función es el elemento en sí.

**Ejemplo**
```javascript
<input type="text" ref={(input) => { textInput = input; }} />
```


### Ejercicio 10
- El cliente ahora me pide que los productos ya no sean una lista fija sino que los usuarios puedan agregar nuevos. Para eso debemos agregar un formulario con una caja de texto (input) para el título y para la descripcion. (dejemos de lado la imagen por ahora)
- Pero me solicita que cada vez que un usuario crea un producto, la caja de texto del titulo y la descripcion queden en blanco y al mismo tiempo se haga foco sobre el título. Dice que sin eso no nos va a pagar.

## Ciclo de vida
Los componentes de react tienen un ciclo de vida. 

### Iniciales
Metodos que van a ser llamados antes y hasta que el componente esta dentro del DOM:

```javascript
constructor() //cuando un componente es instanciado.
componentWillMount() // Justo antes de meter el componente en el DOM.
render() // Cuando se renderiza el componente.
componentDidMount() // Cuando el componente ya esta montado en el DOM.
```

### Actualizacion
Los siguientes van a ser llamados cuando cambie el estado o las propiedades.

```javascript
componentWillReceiveProps() // Justo antes que el componente reciba las props.
shouldComponentUpdate() // Saber si el componente debe ser actualizado.
componentWillUpdate() // Antes de actualizar el componente en el DOM.
render() // Cuando se renderiza el componente.
componentDidUpdate() // Cuando el componente se actualizó en el DOM.
```

### Destrucción
Cuando un componente va a ser removido del DOM:

```javascript
componentWillUnmount() // Cuando el componente se va a remover del DOM.
```

### Ejercicio 11
- Ahora el cliente me dice que la lista no es más fija sino que va a darnos una url para consumir los elementos y que nosotros debemos tomar los elementos para mostrar inicialmente desde esa url.

**Requerimientos**
- Instalar json-server: `npm install -g json-server` (usar sudo si no funciona)
- Utilizando la función request creada durante la segunda clase obtener la lista de posts de la url remota que los contiene.

```javascript
// Codigo para fetch
request('http://localhost:3000/posts')
.then((response) => {
  let = posts = JSON.parse(response);
});
```

## Stateful vs Stateless components
- Todos los componentes que vimos hasta el momento se llaman statefull components. Esto quiere decir que contienen un estado interno que cambia de acuerdo a la lógica implementada dentro del componente.
- A diferencia de los anteriores los componentes stateless no tienen un estado interno sino que son renderizados utilizando solamente las propiedades que le son provistas.
- Esto quiere decir que siempre que le pasemos las mismas propiedades a un componente stateless va a renderizar exactamente lo mismo en pantalla.
- En cambio, los componentes statefull pueden (o no) mostrar distintos resultados en base al estado actual del componente.

### Cómo crear un componente stateless

```javascript
const Text = (props) => <p>{props.children}</p>;
```

- Cuando veamos redux vamos a ver a donde va a parar la lógica de mi aplicación.

### Ejercicio 12
- El cliente nos solicita que en la pagina debe verse el avatar y el nombre del usuario actual por lo cual necesitamos crear un componente avatar. Nuestro arquitecto de software nos pide que sea un componente stateless ya que considera que no va a contener un estado sino que solo va a mostrar una imagen y un nombre.
- El componente va a recibir como parametro el alias del usuario (alias) y una url para su imagen (imageURL).
- El tamaño de la imagen debe fijarse a 50px por 50px.
- Nuestro cliente quiere ver como queda pero nosotros no tenemos ningún servicio de autenticación en nuestro sitio para poder mostrar el avatar correspondiente por lo cual vamos a simular el funcionamiento pasandole por propiedad los valores correspondientes al alias y a la url de la imagen. 
- Como dicho componente va a mostrarse en nuestra homepage vamos a insertarlo dentro del componente app recordando importarlo previamente.