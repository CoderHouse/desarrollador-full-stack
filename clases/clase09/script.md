# Higher-Order Components
Un hoc es una funcion que recibe como parametro un componente y retorna otro componente.

Se utiliza para agregarle funcionalidad al componente que recibimos como parametro.
```
hoc(<App/>)
```
## withErrorHandler
Una app web puede fallar por muchos motivos (falta de internet, bug en el sistema)
por ello es que tenemos que manejar los posibles errores.

Para eso vamos a crear un hoc que se encargue de eso! 

En este caso withErrorHandler se va a encargar de interceptar los requests axios y lanzar un error 
si el request falla.

```
const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null
        };

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState( { error: null } );
                return req;
            } );
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState( { error: error } );
            } );
        }

        componentWillUnmount () {
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        errorConfirmedHandler = () => {
            this.setState( { error: null } );
        }

        render () {
            const error = (
                <div>
                    {this.state.error ? this.state.error.message : ''}
                    <button onClick={this.errorConfirmedHandler}>Clear</button>
                </div>
            )
            const component = <WrappedComponent {...this.props} />;
            return this.state.error ? error : component;
        }
    }
}
```

## Virtual
Ya que JSX tiene que retornar un único componente, muchas veces debemos embolver nuestro retorno en 
un div. Pero hay veces que no podemos hacerlo porque camibia el layout de nuestra app, para ello
vamos a crear un hoc llamado Virtual.

```
const virtual = (props) => props.children;
```

## Como buildear nuestra app
Gracias a que para crear nuestra app utilizamos la libreria create-react-app tenemos a nuestra 
dispocicion un comando para buildear nuestra app. 

```
npm run build
```
ó
```
react-scripts build
```

Esto lo que creara es una carpeta build con nuestra app optimizada y funcionando!

## Como deployear nuestra app
Una vez que tenemos nuestra app buildeada solo debemos publicarla en algun servidor y servir el index.html que se 
encuentra en la carpeta build.
Eso es mas que suficiente para que nuestra app funcione!! 

## Como customizar nuestro build proces
Nuestra app creada por create-react-app de fondo utiliza WEBPACK. Nosotros podemos customizar el proceso webpack solamente
ejectando el archivo de confuguración que el utiliza.
  
```
npm run eject 
```
ó
```
react-scripts eject 
```


### Ejercio integrador 16
- Modifica nuestra app y maneja errores!.
