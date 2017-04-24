# Redux, CSS Modules y React Router

## Combinar reducers
Los reducers son combinados mediante composición para generar lo que se llama un root reducer. Dicho reducer no es más que una función (compuesta de varias otras) que es la encargada de generar un nuevo estado.

Estado -> reducer1 -> reducer2 -> reducer3 -> Nuevo estado
Estado -> root reducer -> Nuevo Estado

```javascript
const rootReducer = combineReducers({
  todos,
  user
});
```

Si bien el root reducer esta formado por todos los reducers de nuestra aplicación, solo aquellos que esten preparados para "responder" son los que efectivamente realizarán los cambios necesarios en el estado.

## Action Creators
Estos son simplemente funciones que pueden o no recibir parámetros y devuelven una acción, es decir, un objeto de javascript que contiene el tipo de acción y el payload.

```javascript
export function vote(id) {
  return dispatch => {
    dispatch({
      type: actionTypes.VOTE,
      id: id
    });
  };
};
```

## Redux Thunk
Redux Thunk es un middleware que permite escribir action creators que retornan una función en lugar de una acción. De esta forma la ejecución de la acción puede ejecutarse más tarde. 

```javascript
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
```

### Ejercio integrador 15
- Modificar nuestra copia de reddit para que utilice la arquitectura de redux.

## React Router y CSS

React router es un componente de react que sirve para gestionar rutas en aplicaciones que utilicen React.

### Instalación 

El commando create-react-app nos permite crear una aplicación basada en react sin mayor esfuerzo. Dicho esto, si uno desea tomar el control de la configuración de la aplicación, como ocurre en este caso esta tool nos provee un subcomando para eyectar la aplicación.

```
npm run eject
```

Después de ejecutar este comando todos los módulos que utiliza la aplicación así como también archivos de configuración y scripts van a moverse a la carpeta del proyecto.

```
npm install react-router-dom --save
```

### Como crear rutas
Normalmente cada ruta en nuestro router va a renderizar algún componente en particular.

Para establecer que componente utilizar se debe usar la propiedad component:

```
<Router>
    <div> // Router solo puede tener un hijo. No ovidar este div.
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
</Router>
```

### Como enlazar a rutas

Para crear un enlace a una ruta específica debemos utilizar el componente Link. Es muy similar a un anchor en html pero brinda la posibilidad de reemplazar la ruta actual usando la propiedad replace. 

```
<Link to="/" replace>Home</Link>
```

### Ejercicio 16
- Crear una ruta para crear un nuevo post en nuestra aplicación. Para ello se deberá hacer que el componente PostBox quede asociado a la ruta `/add`.

## CSS Modules

### Instalación
```
npm install --save-dev css-loader
```

### Configuración
Una vez que instalamos el loader correspondiente, necesitamos una forma de convertir css en estilos que puedan ser aplicados desde javascript. 

Para esto debemos configurar nuestra configuración de webpack indicando cuales extensiones van a ser preprocesadas por este loader.

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```

### Uso
Una vez instalado y configurado el uso no podría ser más simple: nos ubicamos en el archivo en el cual queremos aplicar los estilos y los importamos

```javascript
import styles from "./style.css";
```

Luego podemos aplicar estos estilos al componente que deseemos:

```javascript
render() {
    return (<div className={styles.someCoolClassName}>Anything</div>);    
}
```
Cada clase que definamos en style.css va a estar disponible desde javascript dentro del objeto style. Notese que el nombre style no es significativo. Podemos utilizar el nombre que queramos.

### Ejercicio
Crear un archivo de estilos que se apliquen solamente al componente PostBox. Mover todos los estilos que se encuentran aplicados al componente PostBox desde la hoja de estilos global hacia una hoja de estilos específica.