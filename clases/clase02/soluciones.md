### Ejercicio 4
- Crear una función que devuelva una función para obtener los últimos 5 posts:
- El array de posteos debe tener una estructura como la siguiente:

**Solucion:**
```javascript
const getLatestFive = createLatest(5);
const latests = getLatestFive(posts);

function createLatest(amount) {
  return function(posts) {
    return posts.slice(posts.length - amount, posts.length);
  }
}

console.log(latests);
```


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
- Una función que me devuelva si todos los posts tienen la key titulo usando `every` y `includes`.

**Solucion:**
```javascript

// Filter
function getUserPosts(userId, posts) {
  return posts.filter(function(post) { 
    return post.userId === userId; 
  });
}
let userPosts = getUserPosts('3', posts);
console.log(userPosts);

// Reduce
function groupByUserId(posts) {
  return posts.reduce(function(acc, post){
     if(typeof acc[post.userId] === 'undefined') {
       acc[post.userId] = [post];
     } else {
       acc[post.userId].push(post);
     }
     return acc;
  }, {});
}
let grouped = groupByUserId(posts);
console.log(grouped);

// map
function overrideTitle(posts) {
  return posts.map(function(post) {
    return Object.assign({}, post, {titulo: 'La maquinita'});
  });
}

// some
function someUserByUserId(userId, posts) {
  return posts.some(function(post){
    return post.userId === userId;
  });
}

console.log(someUserByUserId('58c2b163f02975edc6d03526', posts));

// Every and Includes
function requireTitle(posts) {
  return posts.every(function(post){
    return Object.keys(post).includes('titulo');
  });
}

console.log(requireTitle(posts));
```


### Ejercicio 6
- Migrar la función constructora `User` creada en el ejercicio 2 a una clase.

**Solución**
```javascript

const userIdRef = Symbol('userIdRef');
const usernameRef = Symbol('usernameRef');
const nameRef = Symbol('nameRef');
const surnameRef = Symbol('surnameRef');
const postsRef = Symbol('postsRef');

class User {
    constructor(user) {
      this[userIdRef] = user.userId;
      this[usernameRef] = user.username;
      this[nameRef] = user.name;
      this[surnameRef] = user.surname;
      this[postsRef] = [];  
    }
    
    addPost(post) {
      this[postsRef].push(post);
    }

    getPosts(){
      return this[postsRef];
    }

}
const user = new User(12, 'topicus', 'Mariano', 'Carballal');
user.addPost({titulo:'My title'});
console.log(user.getPosts());
```

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
  req.onerror = () => cb(null, new Error(req.statusText));
  req.open('GET', url);
  req.send();
}
request('http://demo.getdkan.com/sites/default/files/Bike_Lane_23.csv', (respose, error) => console.log(response, error));
```


**solución**
```javascript
function request(url) {
  return new Promise(function(resolve, reject){
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if(req.readyState == 4){
        if(req.status === 200){
          console.log(req.response)
          resolve(req.response);
        }
        else{
          reject(new Error(req.statusText));
        }
      }
    };
    req.onerror = () => reject(new Error(req.statusText));
    req.open('GET', url);
    req.send();
  });
}

request('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
  console.log(JSON.parse(response));
});
```