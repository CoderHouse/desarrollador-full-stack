# Mongodb

## ¿Qué es MongoDB?
MongoDB es una base de datos no relacional orientada a documentos. A diferencia de las bases de datos relacionales, en MongoDB no tenemos rows sino que tenemos documentos y tampoco existen las tablas sino las colecciones.

MongoDB es schemaless, lo cual significa que no posee un esquema definido para cada coleccion. En contraste, las bases de datos relacionales requieren que definamos el esquema que tendrá una tabla antes de almacenar datos en ella.

## Documentos
Un documento es una estructura muy similar a un objeto JSON. Cada documento se identifica con un _id que hace de clave primaria. Los documentos MongoDB son documentos BSON, donde los BSON son una representación binaria de JSON con información adicional de tipo. 

Ej:

```javascript
{
   "_id" : ObjectId("54c955492b7c8eb21818bd09"),
   "address" : {
      "street" : "2 Avenue",
      "zipcode" : "10075",
      "building" : "1480",
      "coord" : [ -73.9557413, 40.7720266 ]
   },
   "borough" : "Manhattan",
   "cuisine" : "Italian",
   "grades" : [
      {
         "date" : ISODate("2014-10-01T00:00:00Z"),
         "grade" : "A",
         "score" : 11
      },
      {
         "date" : ISODate("2014-01-16T00:00:00Z"),
         "grade" : "B",
         "score" : 17
      }
   ],
   "name" : "Vella",
   "restaurant_id" : "41704620"
}
```

## Colecciones
Como ya dijimos, MongoDB no tiene tablas sino colecciones. Las colecciones son una forma de organizar los datos. Si bien no existe ningún impedimento para almacenar todos los documentos en una sola colección, es importante hacerlo para simplificar el mantenimiento de los datos, futuras migraciones, etc.

## Tipos de datos
**String** − Una cadena de texto en formato utf-8
**Integer** − Numero
**Boolean** − Verdadero / Falso
**Double** − Numeros con decimales
**Arrays** − Listas
**Timestamp** − Tiempo en segundos desde 1970
**Null** − Un valor nulo
**Date** − Fechas
**Object ID** − Claves primaria para identificar documentos
**Binary data** − Datos binarios
**Code** − Guardar código javascript.
**Regular expression** − Para almacenar expresiones regulares.
**Object** − Usado para 


## Instalación

### MacOS

```
> brew install mongodb
> brew services start mongodb
> mongo
```

### Ubuntu
```
> sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
> echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
> sudo apt-get update
> sudo apt-get install -y mongodb-org
> sudo service mongod start
```

## Operaciones

### Crear base de datos

Para crear o usar una base de datos debemos u
```
> use <nombre-de-la-base>
```

### Crear colecciones
```
> db.createCollection('posts')
```

### Insert
Para insertar un documento debemos utilizar la siguiente sintaxis:
```
db.<collection>.insert({...})
```

Por ejemplo:
```
db.posts.insert({hola:'mongo'})
```

Al ser una base de datos sin esquema tenemos la posibilidad de insertar documentos que no tengan el mismo formato. Por ejemplo:

```
db.posts.insert({mundo:'hola'})
db.posts.insert({foo:'bar'})
```

### Find
Para consultar datos en mongo se utiliza el método find. Es el "select" de mongo.

La sintaxis para hacerlo es la siguiente
```javascript
db.posts.find({title:'MyTitle'}) // Todos los documentos en al coleccion posts cuyo title sea MyTitle
db.posts.find({title:'MyTitle', summary:'MySummary'})// Todos los documentos en al coleccion posts cuyo title sea MyTitle Y el summary sea MySummary
```

Notese que cada key que agreguemos a la query significa un AND lógico. Es decir se van a obtener los resultados que cumplan si o si con todas las condiciones. Más tarde vamos a ver como hacer un OR.

#### Query Selectors

##### Comparación
**$eq**: comparador de igualdad.
``` 
{ <field>: { $eq: <value> } }
```
**$gt**: mayor que el valor
``` 
{ <field>: { $gt: <value> } }
```
**$lt**: menor que el valor
``` 
{ <field>: { $lt: <value> } }
```
**$in**
```
{ field: { $in: [<value1>, <value2>, ... <valueN> ] } }
```

##### Lógicos
**$or**: 
```
{ $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
```
**$not**:
```
{ field: { $not: { <operator-expression> } } }
```

La lista de query selectors no termina con los que acá figuran. Existen más pero por motivos didácticos solo mencionamos los más utilizados.

### Remove
Ahora que sabemos como encontrar elementos dentro de nuestras colecciones solo nos queda indicar que queremos removerlos si eso es lo que deseamos. 
Para ello en vez de utilizar el método find vamos a utilizar el método remove donde la sintaxis para indicar los elementos a remover es la misma que usamos para obtener los documentos. Ej:

```
db.posts.remove({title:'Hola'})
```

Lo anterior va a remover todos los documentos cuyo title sea igual a `hola`.

### Update
Para actualizar, el procedimiento es similar al resto de las operaciones. Contamos con una query que va a conicidir con ciertos documentos y debemos indicar que es lo que queremos modificar de los mismos.

```
> db.posts.update({_id:ObjectId("591fbe5d1aa0ff072ac0bae4")}, {hola:'hey'})
```

Notese que esto va a reemplazar completamente el valor anterior que se encontraba en el documento. Es decir que todo el documento es sobreescrito con el provisto como argumento.

Si nuestra intención es modificar una sola clave, o incorporar un elemento nuevo dentro de un array, contamos con una serie de modificadores que nos permiten lograr esto:

```
> db.posts.update({_id:ObjectId("591fbe5d1aa0ff072ac0bae4")}, {$set{hola:'hey'}})
> db.posts.update({_id:ObjectId("591fbe5d1aa0ff072ac0bae4")}, {$push: {hola:'hey'}})
```

De la misma forma contamos con $pop, $pull, $slice, $sort y muchos otros más.

### Ejercicio
Definir el esquema de la base de datos que necesitamos para implementar la api rest que creamos la clase anterior. En la siguiente clase veremos como implementar los schemas usando mongoose.

Consideren que a partir de ahora debemos empezar a utilizar la entidad usuario.

