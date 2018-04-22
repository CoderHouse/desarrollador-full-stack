# Sequelize
Sequelize es una librería de nodejs para simplificar y abstraer el manejo de la base de datos. Si bien una entidad muchas veces puede ser almancenada dentro de una tabla, otras veces necesitamos varias.

Esto termina por afectar la complejidad de las consultas que necesitamos ejecutar para obtener los datos que nuestra aplicación requiere.

Para simplificar este proceso es que existen los denominados ORM (Object-relational mapping). Un ORM es una técnica de programación para mapear entre dos sistemas de datos incompatibles: en este caso entre la base de datos y objetos de javascript.

## Instalación

```
mkdir example-sequelize
cd example-sequelize
npm init -y
npm install -g sequelize-cli
npm install --save 
```

## Configuración
Antes de arrancar debemos utilizar el comando sequelize init para generar las carpetas requeridas por sequelize.

```
sequelize init
```

Esto va a crear 4 carpetas:
- config: va a guardar las configuraciones para conectarnos a la base de datos en los diferentes entornos
- migrations: cada vez que necesitemos cambiar algo de nuestro esquema, en esta carpeta se van a guardar las migraciones correspondientes.
- models: la carpeta más importante ya que es en la cual vamos a almacenar nuestros modelos. 
- seeders: cuando creamos un proyecto 

## Crear la base de datos

```
createdb todos
```

## Configurar la conexión
Antes de comenzar debemos configurar el archivo config.json dentro de la carpeta config.

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": toDos,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  ...
}
```

## Crear un modelo
Un modelo es una entidad que nos va a servir para realizar las consultas a la base de datos para esa colección de datos. 

Para crear la entidad Todo que almacene todas las tareas que queramos ejecutamos el siguiente comando:

```
sequelize model:create --name Todo --attributes title:string
```

Luego de ejecutar este comando vamos a ver que el archivo todo.js fue creado dentro de la carpeta models y que dentro del archivo se declara el modelo Todos.

```javascript
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todo;
};
```

**Del código anterior podemos observar dos grandes divisiones:**
- Una parte que se encarga de definir los campos que va a tener esa entidad
- La segunda parte define metodos de clase que luego van a servir para especificar funciones para simplificar todavía más la ejecución de consultas complejas.
## Campos
Para definir los campos tenemos dos posibles sintaxis. La primera es:

```
fieldname: fieldtype
```

Por ejemplo:
```javascript
title: DataTypes.STRING
```

La segunda opción nos permite un mayor grado de flexibilidad en la configuración:

```
fieldname: {
  param: value,
  param: ...
}
```

Por ejemplo:

```javascript
id: {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true
}
```

En el ejemplo anterior podemos ver como, más allá del tipo, estamos definiendo que id debe ser la clave primaria de dicho modelo (tabla) y que el mismo debe ser autoincremental.

## Asociaciones
Como vimos durante la clase de MySQL, en las bases de datos relacionales podemos justamente crear relaciones entre tablas valiendonos de las claves primarias y foráneas. 

Desde el punto de vista de Sequelize estas relaciónes van a ser definidas utilizando una serie de métodos.

### hasOne
Indica que una entidad tiene una y solo una entidad de otra clase. Por ejemplo: un usuario tiene un perfil. En este caso la clave foránea se va a almacenar en el modelo Usuario.

### belongsTo
Indica que una entidad pertenece a una y solo una entidad. Por ejemplo: un perfil pertenece a un usuario. En este caso la clave foránea se va a almacenar en el modelo Perfil.

### hasMany
Indica que una entidad puede tener muchas otras entidades de otro tipo. Por ejemplo: una lista puede tener muchos items.

### belongsToMany
Indica que una entiedad puede pertenecer a muchas otras entidades. Por ejemplo: un alumno puede estar cursando muchas materias.

### Sintaxis
La sintaxis para definir una o varias asociaciones las podemos encontrar en cada uno de los modelos. Para cada modelo existe un método associate que va a ejecutarse al inicializar la aplicación. Dentro de dicho método debemos definir las asociaciones necesarias para el modelo.

```javascript
...
associate: function(models) {
  // associations can be defined here
  Todo.belongsTo(models.TodoList)
}
...
```

## Ejercicio 
Generar un proyecto llamado Todos donde se modele cada una de las entidades del mismo y sus relaciones. (ver repositorio example-sequelize)

## Consultas
Hay multiples metodos para hacer consultas:

```javascript
Model.findAll({...});
Model.findById(...);
Model.findOne();
```

### Attributes
Se utiliza para especificar los campos que van a selecionarse. Similar a cuando en SQL ejecutabamos SELECT ... FROM.

```javascript
Task.findOne({
    attributes: ['title','body'],
}).then(result => console.log(result));
```

### Where
Similar a la clausula where de SQL, nos permite filtrar los registros de una 
consulta.
```javascript
Task.findAll({
    attributes: ['title','body'],
    where: {
      title: 'hola'
    }
}).then(result => console.log(result));
```

La anterior consulta va a devolver todas las tareas cuyo title sea igual a `hola`. 

Lo más normal es que dentro de una misma consulta utilicemos más de una condición dentro del where. Para esto, Sequelize nos brinda una gran cantidad de operadores que podemos utilizar.

#### Operadores
Una lista bastante completa de los operadores disponibles puede verse a continuación:

```javascript
$and: {a: 5}           // AND (a = 5)
$or: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
$gt: 6,                // > 6
$gte: 6,               // >= 6
$lt: 10,               // < 10
$lte: 10,              // <= 10
$ne: 20,               // != 20
$eq: 3,                // = 3
$not: true,            // IS NOT TRUE
$between: [6, 10],     // BETWEEN 6 AND 10
$notBetween: [11, 15], // NOT BETWEEN 11 AND 15
$in: [1, 2],           // IN [1, 2]
$notIn: [1, 2],        // NOT IN [1, 2]
$like: '%hat',         // LIKE '%hat'
$notLike: '%hat'       // NOT LIKE '%hat'
$iLike: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
$notILike: '%hat'      // NOT ILIKE '%hat'  (PG only)
$regexp: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
$notRegexp: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
$iRegexp: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
$notIRegexp: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
$like: { $any: ['cat', 'hat']}
                       // LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
$overlap: [1, 2]       // && [1, 2] (PG array overlap operator)
$contains: [1, 2]      // @> [1, 2] (PG array contains operator)
$contained: [1, 2]     // <@ [1, 2] (PG array contained by operator)
$any: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

$col: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example

```

Cabe destacar que estos pueden combinarse y así realizar consultas extremadamente especificas:

```javascript
{
  rank: {
    $or: {
      $lt: 1000,
      $eq: null
    }
  }
}
// rank < 1000 OR rank IS NULL

{
  createdAt: {
    $lt: new Date(),
    $gt: new Date(new Date() - 24 * 60 * 60 * 1000)
  }
}
// createdAt < [timestamp] AND createdAt > [timestamp]

{
  $or: [
    {
      title: {
        $like: 'Boat%'
      }
    },
    {
      description: {
        $like: '%boat%'
      }
    }
  ]
}
// title LIKE 'Boat%' OR description LIKE '%boat%'
```


## Insertar
```javascript
const task = Task.build({title: 'Una tarea muy importante'})
task.save().then(() => {
  console.log('La tarea fue guardada')
})

```

## Actualizar
```javascript
Task.update(
  { title: 'Ahora quiero este titulo' },
  { where: { _id: 1 } }
)
.then(result =>
  console.log('La tarea fue actualizada');
)
.catch(err =>
  console.log('Ocurrió un problema al actualizar la tarea.');
);
```

## Borrar
```javascript
Task.destroy({
    where: {
        id:1
    }
}).then(result =>
  console.log('La tarea fue actualizada');
)
.catch(err =>
  console.log('Ocurrió un problema al actualizar la tarea.');
);
```


## Migraciones
Cada vez que realicemos un cambio en el modelo vamos a necesitar actualizar la base de datos para reflejar dicho cambio. A estas actualizaciones se les llama migraciones y normalmente los ORMs proveen herramientas para generarlas.

En resumen, una migracion es una serie de cambios que se aplican a una base de datos para pasar de un esquema A a un esquema B que refleje el estado más actual de nuestra aplicación.

Cuando creamos un modelo utilizando el comando model:create la migración inicial generada automáticamente. 

Para ver esto pueden chequear la carpeta migrations.

### Tipos de migraciones
- Renombrar tablas
- Agregar campos
- Crear tablas
- Cambia tipos de datos
- etc.

### Crear una nueva migración
Supongamos que queremos aggregar el campo body a nuestro todo. Para hacerlo demoves ejecutar el siguiente comando que nos va a crear una nueva migración:

```
sequelize migration:create --name add-body-to-todos
```

Este comando genera un nuevo archivo con el nombre que le pasamos. No obstante, debemos valernos de la api de Sequelize para hacer los cambios a la base de datos que necesitemos. Por lo tanto, este comando solamente nos va a crear una especie de hoja en blanco sobre la cual trabajar. El archivo debe ser similar al siguiente:

```javascript
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  },

  down: function (queryInterface, Sequelize) {
  }
};
```

En este caso, para agregar el campo body debemos utilizar addColumn pasando el nombre de la tabla, nombre del campo y el tipo de dato:

```javascript
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'TodoItems',
      'body',
      Sequelize.STRING
    );
  },

  down: function (queryInterface, Sequelize) {

  }
};

```

Para todos los métodos de queryInterface deben visitar: http://docs.sequelizejs.com/manual/tutorial/migrations.html

## Ejercicio
Tomando como base el modelado del ejercicio anterior y la api que creamos en el workshop de node debemos se les pide almacenar todos los datos en la base de datos en lugar de hacerlo en memoria.
