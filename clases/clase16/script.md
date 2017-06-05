# Mongoose
Nos permite generar esquemas para validar, convertir datos y llevar a cabo las operaciones más comunes en una base de datos MongoDB.

## Instalación
```
npm install mongoose --save
```

## Creando nuestro primer modelo

```javascript
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

let db = mongoose.connection;
let PostSchema = mongoose.Schema({
    title: String,
    summary: String
});
let Post = mongoose.model('Post', PostSchema);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  let p = new Post({title: 'Hola', summary: 'Mongo'});
  p
  .save()
  .then(post => Post.find({title: 'Hola'}))
  .then(all => console.log(all));
});
```

### Operaciones

#### Find
```javascript
Post.find(queryObject) // Returns a promise
```

Tambien podemos utilizar findOne si solamente queremos retornar un solo elemento:

```javascript
Post.find({nombre: 'Marcos'}) // Returns a promise
```

Otra cosa interesante es que podemos utilizar modificadores como metodos, evitando anidar llaves en la query que a veces resulta complicado de leer:

```javascript
Post.find({nombre: 'Marcos'}).where('age').lte(33) // Returns a promise
```

#### Remove
La sintaxis es practicamente la misma que con mongodb solo que en este caso se recibe un callback. También podemos utilizar promises si lo deseamos.

```javascript
Tank.remove({ size: 'large' }, function (err) {
  if (err) return handleError(err);
  // removed!
});
```

#### Update
Como siempre el update es el más complejo. Para actualizar un documento tenemos 3 opciones.
- Usamos findOne o find para obtener un documento. Actualizamos los valores como si se tratase de un objeto javascript convencional y luego llamamos a su método save.
- Usamos findOneAndUpdate para hacer todo en un solo paso.
- Usamos el método update del modelo. A diferencia de los anteriores no se retorna el o los documentos actualizados.

```javascript
Post.findById(req.params.postId, function (err, post) {  
    if (err) {
        res.status(500).send(err);
    } else {
        post.save(function (err, post) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(post);
        });
    }
});

Post.update({ _id: id }, { $set: { title: 'NAAA' }}, function (err, affectedDocs){
    if(!err) {
        console.log('Everything went fine');
    }
});

Post.findOne(req.params.postId, function (err, doc){
  doc.title = 'NAAAAA';
  doc.save();
});

Post.findByIdAndUpdate(id, { $set: { title: 'OOOO' }}, { new: true }, function (err, post) {
  if (err) return handleError(err);
  res.send(post);
});
```


## Population

Como no existen joins en mongo, a veces resulta un poco incómodo tener que realizar multiple queries para obtener todos los datos que necesitamos. Para esto mongoose nos provee de el método populate. 

Nosotros simplemente declaramos en el schema las referencias que necesitamos y al llamar al metodo populate automáticamente va a remplazar esas referencias para embeber los documentos en la respuesta a la consulta.

Para definir esta conexión nos valemos de la siguiente sintaxis:

```javascript
let mongoose = require('mongoose')
  , Schema = mongoose.Schema
  
let postSchema = Schema({
  _id      : Number,
  title    : String,
  summary  : String,
  comments : [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

let commentSchema = Schema({
  _id      : Number,
  subject    : String,
});

```

Y con esto ya podemos empezar a utilizar el metodo populate:

```javascript
Post
.find()
.populate('comments')
.exec(function (err, posts) {
  if (err) return handleError(err);
  console.log(posts);
});
```

# Workshop mongo
- Tomando como base el modelo generado en la clase anterior vamos a generar una API rest para nuestra aplicación de todos que en lugar de utilizar archivos para persistir la información, utilice MongoDB.
- Esta vez la clase se va a dividir en 4 equipos. Cada equipo debera exponer al final de la clase el porque de sus decisiones de arquitectura al momento de diseñar los endpoints y los modelos para la api.

