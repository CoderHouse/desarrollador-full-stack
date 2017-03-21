### Ejercicio 8
- Crear un componente post que reciba como propiedades que reciba como propiedades el texto y el nombre del autor. 
- Mostrar en la página un post.

**Solucion**
Crear el archivo Post.js dentro de la carpeta src con el siguiente código:

```javascript
import React, { Component } from 'react';
export default class Post extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.titulo}</h3>
        <p>{this.props.bajada}</p>
      </div>
    );
  }
}
```

Modificar App.js con el siguiente código:

```javascript
import React, { Component } from 'react';
import Post from './Post';
import './App.css';

class App extends Component {
    render() {
        return (
            <Post titulo="Lucas" bajada="Este es un post que escribí como ejemplo" />
        );
    }    
}

export default App;
```