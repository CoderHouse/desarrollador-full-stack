nombresMezclados = [
    {nombre: 'maura', genero: 'femenino'},
    {nombre: 'ivana', genero: 'femenino'},
    {nombre: 'natalia', genero: 'femenino'},
    {nombre: 'ivan', genero: 'masculino'},
    {nombre: 'anton', genero: 'masculino'},
    {nombre: 'pavlov', genero: 'masculino'}
]

const getGeneros = objeto => {
  let generos = [];
  objeto.map(obj => {
    generos.indexOf(obj.genero) < 0 ? generos.push(obj.genero) : null;
  })
  return generos;
}



const arrayTasks = genero =>
  nombresMezclados
    .filter(obj => obj.genero == genero)
    .map(obj => obj.nombre = `${obj.nombre} es un nombre ${obj.genero}`);


function ejercicio(nombresMezclados){
  const generos = getGeneros(nombresMezclados);
  let result = {};
  
  generos.map( genero => result[genero] = arrayTasks(genero))

  return result;
}

ejercicio(nombresMezclados)











/*
function groupBy(items, entity) {
  return items.filter(function(item) {
    return item.genero === entity;
  }).map(function(item) {
    return item.nombre + ' es un nombre ' + entity;
  });
}
*/

/*
const groupBy = (items, entity) =>
  items
    .filter(item => item.genero === entity)
    .map(item => `${item.nombre} es un nombre ${entity}`);
*/

/*
var nombre = {
  femeninos: groupBy(nombresMezclados, 'femenino'),
  masculinos: groupBy(nombresMezclados, 'masculino')
};
*/
