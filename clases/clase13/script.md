### Representational State Transfer

### Que es un protocolo
Un protocolo de red designa el conjunto de reglas que rigen el intercambio de información a través de una red de computadoras.

### Que es REST
La Transferencia de Estado Representacional (en inglés Representational State Transfer) o REST es un estilo de arquitectura software para sistemas hipermedia distribuidos como la World Wide Web.

### Cliente servidor
La arquitectura cliente-servidor es un modelo de aplicación distribuida en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados servidores, y los demandantes, llamados clientes. Un cliente realiza peticiones a otro programa, el servidor, quien le da respuesta.


### Recursos accesibles por identificadores (URIs).
Un concepto importante en REST es la existencia de recursos (elementos de información), que pueden ser accedidos utilizando un identificador global (un Identificador Uniforme de Recurso). Para manipular estos recursos, los componentes de la red (clientes y servidores) se comunican a través de una interfaz estándar (HTTP) e intercambian representaciones de estos recursos.

En REST el énfasis se pone en los recursos, o sustantivos. Por ejemplo:
- Post
- Comment
- User

### Verbos
Para manipular los recursos se reutilizan los verbos definidos en el protocolo HTTP. De esta forma contamos con:
- GET para obtener los datos
- POST para crear una entidad nueva
- PATCH o PUT para editar una entidad existente
- DELETE para borrar una entidad existente


### Interfaz uniforme
Mientas que la restricción del interfaz uniforme es la más determinante y visible de las restricciones REST, es comúnmente la razón por la que no se cumplen completamente los principios y técnicas RESTful.

**Las interfaces uniformes:**

- Identifican recursos
- Manipulan recursos a través de representaciones
- Presentar mensajes autodescriptivos

Las interfaces uniformes deberían de identificar el comportamiento del mensaje y la semántica sin mirar al cuerpo del mensaje. La URL o URI debe declarar que el recurso está siendo manipulado. Las interfaces uniformes no dependen del estado del mensaje guardado. Las interfaces uniformes se basan en mensajes estándares (ej. GET, HEAD, POST, DELETE) y comunican información de proceso de tipo medio.

### App todo
Si creamos una api para una aplicación de lista de tareas podríamos definir un recurso Lista y otro Tarea. De esta forma quedarían definidas las siguientes URI:
```
LISTAS
/lista (GET Obtiene todas las listas)
/lista (POST crea una lista y devuelve el id de la lista creada)
/lista/1 (GET Obtiene solo una lista)
/lista/1 (PATCH Actualiza una lista)
/lista/1 (DELETE Borra una lista)

TAREAS
/lista/1/tarea (GET Obtiene todas las tareas de la lista)
/lista/1/tarea (POST crea una tarea y devuelve el id de la tarea creada)
/lista/1/tarea/1 (GET Obtiene solo una tarea)
/lista/1/tarea/1 (PATCH Actualiza una tarea)
/lista/1/tarea/1 (DELETE Borra una tarea)

```

### Stateless
Esto quiere decir que el servidor no almacena información acerca de las sesiones. Toda esta información queda almacenada en el cliente y es enviada en cada petición.

### Cache
Al ser stateless, es muy simple de cachear, ya que cada petición lleva toda la información necesaria para realizar una determinada acción.
De esta forma, ya que siempre una misma petición va a devolver los mismos valores (al menos hasta que la cache se invalide), es que podemos de forma muy simple cachear los resultados que se obtienen al trabajar con una API REST.

### Representaciones de esos recursos en algún formato (JSON|XML) 
En la actualidad la mayoría de las API REST utilizan el formato JSON para la comunicación. No obstante es posible utilizar otro formato como XML.

### Query String y RESTful endpoints
Para modificar los resultados, es decir, alterarlos de alguna forma se suele utilizar la query string. Por ejemplo, si queremos crear filtros podemos hacer lo siguiente:

```
GET /comments?filter[post]=1 HTTP/1.1
GET /comments?filter[title]=1 HTTP/1.1
GET /comments?sort[title]=ASC HTTP/1.1
```

### Códigos HTTP
Es muy importante que utilicemos los códigos HTTP para indicar los distintos estados que puede retornar una petición. Por ejemplo: si una petición tuvo éxito debemos retornar 200. Si un recurso no existe debemos retornar 404.

Para ver una lista completa pueden ingresar a: http://www.restapitutorial.com/httpstatuscodes.html

### Errores comunes
- Añadir métodos a medida si los estándares no encajan (típico :D)
- Pensar que para cada recurso hay que implementar todas las acciones 

### Enlaces útiles
- http://jsonapi.org/recommendations/

### Ejercicio
- Se necesita modelar una api RESTful para un sistema de e-commerce. Por dónde comenzarían? Que entidades son importantes?