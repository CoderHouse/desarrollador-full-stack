##### const y let
* Cuales son las nuevas definiciones de variables y cuales sus diferencias.

##### arrow functions
* La nueva sintaxis para definir funciones y sus ventajas.

##### array methods
* Los metodos nativos de los array.
* map
* reduce
* filter

##### String Templates
* Como podemos trabajar con strings de manera mas sencilla.


### Ejercicio


dado de un array de objetos con nombres y genero obtener un objeto que conteng 2 arrays. Uno con los nombres masculinos y otro con los femeninos. A cada nobre se le debe agregar el texto 'es un nombre masculino', o 'es un nombre femenino', segun sea el caso.

El array dado es:
nombresMezclados = [
    {nombre: 'maura', genero: 'femenino'},
    {nombre: 'ivana', genero: 'femenino'},
    {nombre: 'natalia', genero: 'femenino'},
    {nombre: 'ivan', genero: 'masculino'},
    {nombre: 'anton', genero: 'masculino'},
    {nombre: 'pavlov', genero: 'masculino'}
]  

el objeto esperado es:

nombre = {
  femeninos = [
    'maura es un nombre femenino',
    'ivana es un nombre femenino',
    'natalia es un nombre femenino',
  ],
  masculinos = [
    'ivan es un nombre masculino',
    'anton es un nombre masculino',
    'pavlov es un nombre masculino',
  ]
}
