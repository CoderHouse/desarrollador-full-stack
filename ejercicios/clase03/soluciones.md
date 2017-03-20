### Ejercicio 8
- Crear un componente post que reciba como propiedades que reciba como propiedades el texto y el nombre del autor. 
- Mostrar en la página un post.

**Solucion**

Modificar App.js con el siguiente código:

```javascript
import React, { Component } from 'react';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.autor}</h3>
        <p>{this.props.texto}</p>
      </div>
    );
  }
}

class App extends Component {
    render() {
        return (
            <Post autor="Lucas" texto="Este es un post que escribí como ejemplo" />
        );
    }    
}

export default App;
```