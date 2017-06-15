var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var Blog = mongoose.model('Blog', schema, 'blogs');

Blog.find({author:'Israel Arjona'}, function(error, docs){
  if(error) {
    console.log(error);
    process.exit(1);
  }
  console.log(docs);
  process.exit(0);
});
