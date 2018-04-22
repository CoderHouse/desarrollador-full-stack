# Workshop React
## Axios

Utilizar axios como libreria http para realizar requests.

## Proyecto

A esta altura ya sabemos como crear un componente en react y utilizarlo desde otro componente. 

También sabemos como crear componentes que muestren una lista de elementos.

Sabemos como obtener datos desde una url remota así como también subscribir a eventos que ocurren en nuestra aplicación.

Hoy vamos a poner todos estos conocimientos en práctica

## Ejercicio 13
Nuestro cliente se esta impacientando y quiere ver algo un poco más interesante en la pantalla. Nos esta reclamando lo siguiente:

- Necesito poder ver la tarjeta del item que voy a guardar mientras estoy modificando el titulo y la descripcion.
- Necesito que los usuarios puedan agregar y eliminar items en la base de datos local.

## React Router Dom
Vamos a instalar react-router-dom para empezar a tener multiples vistas en nuestra aplicacion!

`npm install react-router-dom`

Para que nuestra app sepa modificar el contenido dependiendo la ruta debemos wrappear nuesto componente <App> con el componente BrowserRouter

`ReactDOM.render(
     <BrowserRouter>
         <App/>
     </BrowserRouter>, document.getElementById('root'));`
   
Creamos una ruta para para mostrar el creador de item de la siguiente manera:

`<Route path="/" exact render={(props) => (<CreateItem saveHandler={this.saveItem} {...props} />)}/>`
