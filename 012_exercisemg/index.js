var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var Blog = mongoose.model('Blog', schema, 'blogs');

var blog = new Blog({
  title: 'My Blog',
  author: 'Israel Arjona',
  body: 'Este es el blog de Israel',
  comments: [
    {body: 'Este es el primer comentario', date: new Date('2017-06-14')},
    {body: 'Este es el segundo comentario', date: new Date('2017-06-15')},
  ],
  meta: {
    votes: 3,
    favs: 5
  }
});
//Guardo utilizando la instancia del model User
blog.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Saved Blog 1!!");
});