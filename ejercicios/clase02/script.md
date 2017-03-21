## ES2015

Programación funcional
======================
- Que es la programación funcional
- Pilares de la programación funcional
- Funciones que devuelven funciones
- Funciones puras vs funciones impuras
- Composición
- Inmutabilidad
- call, apply and bind

### Ejercicio 4
- Crear una función que devuelva una función para obtener los últimos 5 posts usando el array incluido en el archivo posts.js

**Ejemplo:**
```javascript
const getLatestFive = createLatest(5);
const latests = getLatestFive(posts);
```

Array Methods
====================================================================
- Map and reduce
- Filter, some, every and includes
- Keys and values
- Repaso general de los demas metodos

### Ejercicio 5
Usando el array de posteos del ejercio anterior crear:
- Una función que dado cierto userId devuelva todos los posts correspondientes a ese usuario.
- Una función que devuelva los posts agrupados por usuario usando `reduce`:
```javascript
{
    "58c2b163f02975edc6d03526": [posts del usuario...],
    "58c2b1635ffb495016775b12": [posts del usuario...]    
}
```
- Una función que me devuelva los posts sobreescribiendo el titulo a un texto fijo (ej: 'la maquinita') usando map `map`
- Una función que devuelva si alguno de los posts tiene un link con el valor `http://example.com` usando `some`
- Una función que me devuelva si todos los posts tienen la key title usando `every` y `includes`.

Clases
====================================================================
- Sintaxis
- Constructores
- Subclases
- Super

### Ejercicio 6
- Migrar la función constructora `User` creada en el ejercicio 2 a una clase.

Promises
====================================================================
- Que son las promesas y que problema solucionan
- Pyramid of doom
- Sintaxis de las promesas
- Metodos de las promesas
    + Then
    + Catch
    + Resolve
    + Reject
    + All

### Ejercicio 7
Modificar el siguiente código para utilizar Promises en lugar de callbacks:

```javascript
function request(url, cb) {
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if(req.readyState == 4){
      if(req.status === 200){
        cb(req.response, null);
      }
      else{
        cb(null, new Error(req.statusText));
      }
    }
  };
  req.onerror = () => cb(new Error(req.statusText));
  req.open('GET', url);
  req.send();
}
request('http://demo.getdkan.com/sites/default/files/Bike_Lane_23.csv', (respose, error) => console.log(response, error));
```
