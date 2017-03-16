### Ejercicio 1
- ¿Qué es el scope?
Es el alcance donde una variable puede utilizarse. Todas las variables definidas usando var son visibles dentro de la funcion padre mas próxima. En cambio las definidas usando let tienen alcance de bloque.

- ¿Qué es un closure?
Es la capacidad de las funciones de "recordar" cosas (variables, funciones, etc.) del scope en el que fueron creadas. Se llaman closures porque estas funciones se cierran sobre sí mismas y todas las definiciones que ubiquemos dentro de la función no van a ser visibles desde afuera.

- ¿Cuál es la diferencia entre let y var?
var tiene alcance de funcion y let tiene alcance de bloque.

- ¿Qué es el hoising?
En español izamiento. Todas las variables definidas usando var izan su declaración hasta lo más alto de la función. No obstante las asignaciones ocurren en el lugar en el que fueron hechas.

- ¿Para que sirve const?
const sirve para definir constantes. Identificadores que una vez que son asignados no pueden modificarse.

### Ejercicio 2
- Crear una función constructora llamada `User` que tenga las siguientes propiedades privadas: userId (Integer), username (string), name (string), surname(string) y posts (array). Asimismo debe contar con un metodo publico para obterner todos los posts del usuario.

```javascript
function User() {
    var userId;
    var username;
    var name;
    var surname;
    var posts = [];

    this.getPosts = function() {
        return posts;
    }
}
```


### Ejercicio 3
Tomando como base el ejercio anterior usar template strings para obtener el nombre de usuario junto con la cantidad the posts que publicó. Ej: topicus1 (77)

```javascript
function User() {
    var userId;
    var username;
    var name;
    var surname;
    var posts = [];

    this.getPosts = function() {
        return posts;
    }

    this.getUserSummary() {
        return `${username} (${posts.length})`;
    }
}
```
