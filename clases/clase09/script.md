# Build tools

## Babel
Babel es un transpilador, una herramienta que transforma el código escrito un lenguaje y lo convierte en otro. Nos permite utilizar las últimas características del estandar ECMAScript sin importar el soporte presente en cada browser.

Aún cuando es posible instalar babel globalmente se recomienda hacerlo dentro del proyecto que estemos creando. Para ello debemos realizar los siguientes pasos:

### Instalación

```
npm install --save-dev babel-cli
```

Este comando va a instalar babel dentro de mi proyecto.

### Uso
Dado que al instalarlo localmente el archivo binario que permite ejecutar el comando queda situado dentro de la carpeta de dependencias (node_modules) y que resulta incomodo tener que estar escribiendo la ruta hacia ese archivo vamos a aprender como definir scripts para nuestro proyecto y al mismo tiempo realizar el setup de babel.

Abrimos el archivo package.json que se encuentra en la raíz de nuestro proyecto y agregamos la key scripts como en el siguiente ejemplo:

```javascript
 {
    "name": "my-project",
    "version": "1.0.0",
    "scripts": {
      "build": "babel src -d lib"
    },
    "devDependencies": {
      "babel-cli": "^6.0.0"
    }
  }
```

Como pueden ver en el ejemplo, dentro de la key scripts se ve un comando build que al ejecutarlo va a ejecutar babel tomando todos los archivos que esten dentro de la carpeta src y volcando el resultado en la carpeta lib.

Para correrlo se debe ejecutar:
```
npm run build
```

Veamos un poco como funciona babel utilizando la repl(Read–eval–print loop) de babel:

```
http://babeljs.io/repl/
```

### .babelrc
A grandes rasgos babel hace lo que cualquier otro compilador: procesa, transforma y genera nuevo codigo.

Para configurar las tranformaciones que queremos aplicar a nuestro código tendremos que crear un archivo en la raíz de nuestro proyecto llamado .babelrc.

Pero si no definimos ninguna configración vamos a ver que el código compilado no presenta cambios respecto del código original. 

#### Plugins
Los plugins nos permiten configurar de forma muy granular cuales son las features que queremos transformar. Así por ejemplo si deseamos transformar las arrow functions para ser soportadas en todos los navegadores podemos agregar el plugin es2015-arrow-functions a la lista:

```
"plugins": ["es2015-arrow-functions"]
```

#### Presets
Normalmente queremos contar con todas las features del lenguaje incluídas para determinado año por eso para la mayoría de los casos conviene utilizar presets que son simplemente un conjunto de plugins.

Hay veces que queremos agregar una carácteristica que no esta presente en el preset que tenemos establecido pero tampoco queremos incorporar un preset completo. En esos casos podemos definir un preset y agregar los plugins extra que consideremos. 

Para instalar el preset que vamos a utilizar en esta clase:
```
npm install --save-dev babel-preset-es2015
```

#### Polyfill
Un Polyfill código que te permite trabajar con una tecnología que no soporta el navegador de forma nativa. A diferencia de las transformaciones que ya vimos, el código no cambia, solo se agrega una pieza de código que cumple con la API de su contraparte nativa. 

Por ejemplo, las promesas pueden ser implementadas utilizando ES5 por lo tanto no es necesario una transformación. 

#### Runtime transform
El inconveniente de usar polyfills es que si la contraparte nativa es actualizada, un desarrollador puede interpretar que esta usando la version nativa cuando en realidad, dependiendo del navegador, puede estar usando un polyfill. 

El runtime transform a diferencia del polyfill transforma toda implementacion que utilice features no compatible con la version de javascript que queremos utilizar para que utilicen una version provista por babel. 

Usar el runtime es lo más recomendable cuando queremos crear librerías que puedan utilizar terceros.

### Ejercicio 17
- Realizar el setup de babel para compilar codigo es2015 usando un script de npm.

## Webpack
Nos permite crear paquetes con todos los assets necesarios para nuestra aplicación. 

### Entry point
Es el punto de inicio de nuestra aplicación. A partir de este archivo webpack va a saber que es lo que debe agregarse al bundle final.

**Ejemplo de un entry point simple:**
```
entry: './index.js',
```

**Ejemplo de un entry point multiple:**
```
entry: ["./app/entry1", "./app/entry2"],
```

**Ejemplo de un entry point multiple con nombres**
```
entry: {
  a: "./app/entry-a",
  b: ["./app/entry-b1", "./app/entry-b2"]
},
```

### Output
Las opciones del output nos permiten configurar la forma en la que los archivos compilados van a ser grabados. Por ejemplo: la carpeta y archivo de destino, el nombre del archivo de source map.

### Loaders
Esta es una de las configuraciones más importantes de webpack. Dentro vamos a especificar que loader va a ser utilizado para cada tipo de archivo en particular. 

Por ejemplo los archivos css no son javascript por lo cual vamos a necesitar un loader que me permita importarlos como si de un archivo js se tratase.

Si nuestro archivo contiene jsx (como por ejemplo un componente de react) entonces vamos a necesitar un loader que se encargue de manejar este tipo de archivos.

Acá pueden ver la lista completa de loaders disponibles https://webpack.github.io/docs/list-of-loaders.html

### Configuración de los loaders

```
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] },
            }],
        },
    ],
},
```

Todo las configuraciones que se encuentran dentro de la key module van a determinar como los diferentes tipos de modulos van a compilarse. 

Vamos a hacer foco en la configuración más importante: rules. 

Las rules nos permiten indicar que loader utilizar para cada tipo de archivo. Todos los archivos que pasen la expresión regular definida en test van a utilizar el loader (o los) definido dentro de use.

En el caso del ejemplo podemos ver como babel-loader va a ser utilizado para todos los archivos terminados .js. También podemos observar que una serie de opciones son pasadas a dicho loader para que funcione correctamente. En este caso los presets correspondientes.

Si pasamos la configuracion en el loader no es necesario utilizar el .babelrc ya que cumplen el mismo objetivo.

### Plugins
Los plugins permiten customizar el proceso de build. Por ejemplo podemos utilizar el plugin UglifyJsPlugin que va a permitirnos minificar el resultado de nuestro build.

Algunos de los más importantes son CommonsChunkPlugin, UglifyJsPlugin, ExtractTextWebpackPlugin, DefinePlugin. 

Cada plugin necesita ser instalado por separado utilizando npm o yarn.

Por ejemplo:

```
npm install --save-dev extract-text-webpack-plugin
```

### Resolve
Resolve nos permite ahorrarnos el tener que tipear path relativos durante la importación de un modulo. 

## Lint
Los linters son tools que nos ayudan a estructurar nuestro código de forma consistente siguiendo una serie de reglas que son definidas desde un archivo de configuración.

También nos ayudan a evitar los errores más comunes que podemos cometer por no seguir las mejores prácticas de programación.

Para javascript existe uno llamado eslint.

### Instalación
```
npm install -g eslint
npm install eslint --save-dev
```

### Configuración
De la misma forma que configuramos el .babelrc para las configuraciones del transpilador, aquí vamos a necesitar un archivo `.eslintrc` que contenga todas las configuraciones del linter.

Por suerte eslint ya viene con una serie de configuraciones por defecto y podemos aprovechar las guías de estilos más populares como la de airbnb o google.

Para crear la configuración debemos ejecutar:

```
eslint --init

? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Airbnb
? Do you use React? Yes
? What format do you want your config file to be in? JSON
```
