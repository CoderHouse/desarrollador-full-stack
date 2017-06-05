# Firebase

Firebase como heroku es una plataforma que brinda servicios para poner nuestras aplicaciones en la nube. 

Uno de los paradigmas más interesantes que surgieron en estos ultimos años es el de las aplicaciones serverless, es decir, aplicaciones que no requieren que nosotros programemos el backend. 

Ahora bien, si nosotros no lo hacemos, alguien lo tiene que hacer por nosotros.

Firebase nos brinda una serie de herramientas para poder lograr esto como: un serivcio de autenticación, base de datos realtime en la nube, funciones lambda, etc.

## Antes de empezar

Debemos tener una cuenta de google. En caso de no tenerla hay que crearla.

## Crear una aplicación

- Clickeamos crear una aplicación web.
- Elegimos un nombre y el país
- Copiamos el código que generó

## Autenticación
- En el dashboard clickeamos en la sección autenticación
- Luego en la pestaña sign in methods
- Habilitamos la autenticación por email/password

Una vez hecho esto vamos a crear un archivo html básico.

**Ejemplo**

Revisemos el ejemplo que se encuentra en la carpeta example-firebase.

## Base de datos

Cuando firebase comenzo el principal servicio que ofrecía es el de ser una base de datos en tiempo real.

Este tipo de base de datos es de extrema utilidad cuando o bien no queremos contar con infraestructura propia o estamos construyendo una aplicación realtime como ser un servicio de mensajería, email, aplicaciones colaborativas, etc.

Partiendo de la base del ejemplo de autenticación debemos agregar la siguiente linea para tener acceso a la base de datos:

```
let database = firebase.database();
```