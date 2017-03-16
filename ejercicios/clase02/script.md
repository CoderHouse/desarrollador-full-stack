Programación funcional
====================================================================
- Que es la programación funcional
- Pilares de la programación funcional
- Funciones que devuelven funciones
- Funciones puras vs funciones impuras
- Composición
- Inmutabilidad
- call, apply and bind

### Ejercicio 4
- Crear una función que devuelva una función para obtener los últimos 5 posts:

- El array de posteos debe tener una estructura como la siguiente:

```javascript
const posts = [
  {
    userId: "58c2b1633a75ca651ef1cc9d",
    title: "cupidatat mollit Lorem ex est",
    summary: "duis sint dolor in reprehenderit nostrud veniam consequat est",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163be1c3b62aae46134",
    title: "tempor aute nulla laboris nostrud",
    summary: "anim veniam et occaecat duis sunt cillum sunt id",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b1637c03205de3e8cf46",
    title: "dolore consectetur in do eu",
    summary: "sit aliquip eu id excepteur dolor nulla sunt elit",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163088464d1826ffb0e",
    title: "non ad et amet aliqua",
    summary: "fugiat tempor consectetur ea proident proident tempor Lorem dolor",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b16369a10d974596d6ed",
    title: "incididunt laborum ullamco officia cillum",
    summary: "fugiat elit non minim esse aute id eu est",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163e135daa9b23107a1",
    title: "in incididunt dolor sint voluptate",
    summary: "voluptate id adipisicing quis magna cillum exercitation officia laboris",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b16395cf8efe96c03c8e",
    title: "aliqua occaecat aute aute enim",
    summary: "et eiusmod dolor dolor consequat nulla irure pariatur anim",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163048474e666f5d875",
    title: "ad minim ex sunt ea",
    summary: "exercitation tempor nostrud commodo ullamco do laboris dolor adipisicing",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b1639d9730b1cfa44591",
    title: "eu dolor proident anim voluptate",
    summary: "ex deserunt ipsum cillum qui voluptate Lorem ea nostrud",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b1636fdc9ee9f0fe3765",
    title: "adipisicing ea consectetur adipisicing anim",
    summary: "exercitation reprehenderit et mollit aliquip tempor anim ipsum irure",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163e3330c222f00bfb4",
    title: "velit cupidatat excepteur amet aliqua",
    summary: "quis commodo Lorem in cupidatat commodo culpa et in",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b1635ffb495016775b12",
    title: "fugiat et ut veniam Lorem",
    summary: "sit sint Lorem nulla aliqua reprehenderit sunt ullamco excepteur",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163f02975edc6d03526",
    title: "amet fugiat reprehenderit sit et",
    summary: "qui incididunt laborum eu est sint voluptate voluptate cillum",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163f02975edc6d03526",
    title: "irure Lorem do aliqua qui",
    summary: "labore irure exercitation do commodo voluptate sint exercitation deserunt",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163f02975edc6d03526",
    title: "culpa culpa consequat incididunt aliquip",
    summary: "cupidatat in dolor ut labore et officia pariatur exercitation",
    link: "http://example.com"
  }
]
```

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
- Una función que me devuelva los posts sin el summary usando `map`
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

### Ejercicio
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
