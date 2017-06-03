# Deploy a heroku
Heroku es una plataforma basada en la nube que nos permite hacer deploy de nuestras aplicaciones de forma muy secilla.

Existen otras plataformas que cumplen el mismo proposito como AWS, Windows Azure o Google Cloud. Todas ofrecen un servicio gratuito con ciertas limitaciones.

## Antes de empezar
Deben crear una cuenta en heroku entrando a https://www.heroku.com/

## Instalación CLI Tool

### MacOS
```
brew install heroku
```

### Linux
```
sudo apt-get install software-properties-common # debian only
$ sudo add-apt-repository "deb https://cli-assets.heroku.com/branches/stable/apt ./"
$ curl -L https://cli-assets.heroku.com/apt/release.key | sudo apt-key add -
$ sudo apt-get update
$ sudo apt-get install heroku
```

### Windows
```
https://devcenter.heroku.com/articles/heroku-cli
```

## Crear una aplicación
Vamos a utilizar el express generator:

```
express --view=pug example-heroku
cd example-heroku
npm i
git init
```

Hay que asegurarse de tener un archivo gitignore para no incluir los node_modules ya que heroku se va a encargar de instalarlos por su cuenta.

**.gitignore**
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
# Bower dependency directory (https://bower.io/)
bower_components
# Dependency directories
node_modules/
jspm_packages/
```


**Procfile**
Una vez hecho esto debemos crear un archivo Procfile. Este archivo va a contener información para iniciar el proceso. En este caso va a ser el proceso node.

El archivo Procfile va a contener lo siguiente

```
web: node ./bin/www
```

**.env**
Muchas veces vamos a requerir que nuestras aplicaciones tomen las variables del entorno. El generador de express nos insta a utilizar la variable DEBUG para que nuestra aplicación nos ayude a identificar los errores de forma mas simple.


**Guardar cambios**
Guardamos los cambios en git
```
git add . -A
git commit -m 'Initial commit'
```

**Creando nuestra aplicación**
```
heroku create
```

**Deployando**
```
git push heroku master
```

**Veamos como quedó**
```
heroku open
```

### Ejercicio
Como vimos deployar una aplicación usando heroku es una tarea bastante simple. 

Lo que se necesita ahora es poder deployar la api desarrollada en las clases anteriores a heroku.

**Vamos a complicarla un poco:**

Heroku no ofrece un servicio de mongo gratuito sin antes agregar una tarjeta de crédito. 

Pero nos enteramos que hay una gente muy copada que se llama https://mlab.com y que nos permite utilizar un sandbox (un espacio para hacer pruebas) gratuito.

**Para habilitar el servicio:**
- Nos hacemos una cuenta
- Una vez logueados clickeamos en create new para crear una nueva base
- Elegimos single node
- Y luego en las opciones elegimos sandbox
- Finalmente debemos crear un usuario para poder acceder a la base

**EL EQUIPO QUE PRIMERO LOGRE HACER FUNCIONAR LA API DE HEROKU CON LA BASE DE DATOS ES EL GANADOR**
