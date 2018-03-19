# Redux

## Combinar reducers
Los reducers son combinados mediante composición para generar lo que se llama un root reducer. Dicho reducer no es más que una función (compuesta de varias otras) que es la encargada de generar un nuevo estado.

Estado -> reducer1 -> reducer2 -> reducer3 -> Nuevo estado
Estado -> root reducer -> Nuevo Estado

```javascript
const rootReducer = combineReducers({
  todos,
  user
});
```

Si bien el root reducer esta formado por todos los reducers de nuestra aplicación, solo aquellos que esten preparados para "responder" son los que efectivamente realizarán los cambios necesarios en el estado.

## Action Creators
Estos son simplemente funciones que pueden o no recibir parámetros y devuelven una acción, es decir, un objeto de javascript que contiene el tipo de acción y el payload.

```javascript
export function vote(id) {
  return dispatch => {
    dispatch({
      type: actionTypes.VOTE,
      id: id
    });
  };
};
```

## Redux Thunk
Redux Thunk es un middleware que permite escribir action creators que retornan una función en lugar de una acción. De esta forma la ejecución de la acción puede ejecutarse más tarde. 

```javascript
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
```

### Ejercio integrador 15
- Modificar nuestra app para permitir la combinacion de reducers.
- Agregar llamadas asincronicas al json-server para guardar/editar/elimiar productos.