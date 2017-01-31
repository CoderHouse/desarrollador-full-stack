## JavaScript ES6

* Programacion Funcional
 * Algunos conceptos basicos
* Promises
 * fetch() y las ventajas de trabajar con promesas en lugar de callbacks
* Clases
 * La implementación de ES6 para poder trabajar con clases y herencia


### Programacion Funcional
Algunos conceptos:
* inmutabilidad de los datos
* funciones puras


Se basa fuertemente en un concepto de función algo diferente al que estamos acostumbrados.
No hay variables, por lo que estas funciones sólo tratarán con sus valores de entrada y con constantes predefinidas; no tienen más posibilidad de acción. Los datos no cambia. En caso de necesitar devolver ese dato modificado, se crea uno nuevo.

Al no haber variables, no hay efectos laterales, es decir, al ejecutar la función no cambiará nada fuera del entorno de ésta. Tampoco dependerá para nada de lo que haya en ese entorno. Se dice que una función tiene transparencia referencial si, para un valor de entrada, produce siempre la misma salida. Por eso las funciones se las conoce como funciones puras.


### Promises

El objeto Promise se usa para operaciones diferidas o asíncronas. No hay que olvidar que Javascript es un lenguaje que funciona como single-thread, o sea, en un solo hilo de ejecucionUna Promesa puede estar en uno de estos estados:

pending ( pendiente ): estado inicial, no cumplida o rechazada.
fulfilled ( cumplida ): operación satisfactoria.
rejected ( rechazada ): operación fallida.



La API Fetch proporciona un canal para obtener recursos a través de la red. Basándose en un sistema de Peticiones (Request) y Respuestas (Response) permite a un documento o aplicación mantener un diálogo con el servidor de forma segura y semántica.

1. El método fetch() realiza una petición del recurso que necesita sobre el servidor que lo aloja.
2. El propio objeto devuelve una promesa con el objeto Response de la petición, tanto si tiene éxito como si no.
3. Una vez obtenida la respuesta, ésta proporciona una serie de métodos que permiten comprobar su contenido y manejarlo.


``````Javascript
fetch( url )
    .then( r => r.json() )
    .then( data => console.info( data ) )
    .catch( e => console.error( 'Something went wrong' ) );
``````

### Clases

* Los métodos no se declaran de forma explícita con var, let o const.
* Al tratarse de un constructor y no una función, no hay una salida de datos explícita con return.
* Encontramos nuevas palabras reservadas: constructor, super, get, set y static.


###### constructor
En programación orientada a objetos (POO), un constructor es una subrutina cuya misión es inicializar un objeto de una clase. En el constructor se asignan los valores iniciales del nuevo objeto.


###### getter y setter
Los ‘setters‘ funcionan mediante asignación, no como funciones. Son un canal directo para modificar el valor de las propiedades del objeto instanciado.
El ‘get‘, como los anteriores, no es una función que tenga que ser ejecutada, sino un acceso a la propiedad del objeto instanciado.
Usamos _ para los nombres de variables porque acceder a un ‘setter‘ que modifica una propiedad con su mismo nombre, crea una llamada de función recursiva infinita.

###### static
Los métodos estáticos son aquellos que se ejecutan a través/desde de la propia clase, no desde sus instancias.


###### Herencia: subclases o clases hijas
Hablamos de crear clases que extiendan a otras.

En Javascript, conseguimos este comportamiento utilizando la palabra reservada extends (documentación aquí) al definir una clase hija.



### Ejercicios

#### Promesas

###### Implementar un metodo get:
* que reciba como parametro una url
* que realize una peticion, devolviendo dicha peticion como promesa, sin importar el resultado

###### Implementar un metodo getJSON
* que reciba como parametro una url
* llame al metodo get pasandole esa url, y si la promesa se resuelve, devolver una promesa con la respuesta en formato json

###### Invocar al metodo getJSON
* pasarle la url 'https://jsonplaceholder.typicode.com/posts'.
* Mostrar el resultado si la peticion se logra hacer o mostrar el mensaje de error si no se pude realizar al peticion.

#### Clases

###### Crear una clase Persona

debe tener como metodos:
* caminar
* correr
* comer
* dormir

y las sguientes propiedades:
* edad
* nombre
* genero

###### Crear una clase Developer que extienda de Persona.

debe tener los siguientes metodos:
* estudiar
* aprender
* desarrollar
* vender
* tomarCafe
* procrastrinar
* debugear

y las siguientes propiedades:
* porcentajeDeVisionPerdida
* maxTazasDeCafePorDia
* tiempoAcumuladoSinVidaSocial

###### Crear una clase Frontender que extienda de Developer

debe tener los siguientes metodos:
* aprenderNuevoFramework
* olvidarFrameworkAprendido
* debugear con Chrome Dev Tools

y las siguientes propiedades
* framewroksAprendidos
* JS
* HTML
* CSS


###### Crear una clase Backender que extienda de Developer

debe tener los siguientes metodos:
* AprenderNuevoBD
* aprenderJS
* olvidarPuntoNet
* debugear Windows

y las siguientes propiedades
* BD
* nodejs
* NET
* php

###### Crear una clase FullStacker que extienda de Developer

que tenga los metodos y propiedades de los fronteders y backenders


Una de estas clases debe saber hacer peticiones mediante la API fetch
=======
>>>>>>> 0958fab73db0f0f149b30d88e9241c565c61b5b8
