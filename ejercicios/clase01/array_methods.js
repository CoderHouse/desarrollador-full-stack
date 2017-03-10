const arrayNombres = [
  'pablo',
  'ivan',
  'pavlov',
  'dimitri',
  'pablo'
]

const nombresDespuesDeMap = arrayNombres.map(function(nombre){
  return nombre.toUpperCase();
});

console.log(nombresDespuesDeMap)
console.log(nombresDespuesDeMap.length)
console.log(arrayNombres)
console.log('\n\n')



const nombresDespuesDeFilter =  arrayNombres.filter(function(nombre){
  return nombre !== 'pablo'
});


console.log(nombresDespuesDeFilter)
console.log(nombresDespuesDeFilter.length)
console.log(arrayNombres)
console.log('\n\n')

const nombresDespuesDeReduce =  arrayNombres.reduce(function(texto, nombre){
  return texto + '-' + nombre
});


console.log(nombresDespuesDeReduce)
console.log(nombresDespuesDeReduce.length)
console.log(arrayNombres)
console.log('\n\n')


var encadenados = arrayNombres
.filter(function(nombre){
  return nombre !== 'pablo'
})
.map(function(nombre){
  return nombre.toUpperCase();
})
.reduce(function(texto, nombre){
  return texto + '-' + nombre
})



console.log(encadenados)
console.log(arrayNombres)
console.log('\n\n')
