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