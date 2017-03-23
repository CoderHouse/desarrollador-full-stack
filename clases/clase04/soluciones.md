### Ejercicio 9
- Mostrar un solo post en la pantalla no tiene mucho sentido. El cliente me pide si en vez de mostrar 1 solo post podemos mostrar una lista que el nos va a enviar por mail.
- Se pide entonces crear un componente PostList que utilice el componente Post creado en la clase anterior y que reciba por propiedad una lista (array) de posts. Este componente se va a encargar de recorrer el array y convertir cada item del array en un componente Post que va a ser mostrado dentro de la lista.

**Solucion**
Crear el archivo PostList.js dentro de la carpeta src con el siguiente código:

```javascript
import React, { Component } from 'react';
import Post from './Post';
export default class PostList extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map(post => <Post titulo={post.titulo} bajada={post.bajada} />)}
      </ul>
    );
  }
}
```

Modificar App.js con el siguiente código:

```javascript
import React, { Component } from 'react';
import PostList from './PostList';
import posts from './posts'; // Usar la lista de posts de la clase 2
import './App.css';

class App extends Component {
    render() {
        return (
            <PostList posts={posts}/>
        );
    }    
}

export default App;
```