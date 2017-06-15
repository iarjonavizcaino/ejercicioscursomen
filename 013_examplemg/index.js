var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var User = mongoose.model('User2', schema, 'users2');

//Consulta General
User.find({}, function (error, docs) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("<------Consulta General------>");
  console.log(docs);
});

//Consulta con restricción
User.find({ email: 'user2@ittepic.edu.mx' }, 
  function (error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log("<------Consulta Con restricción------>");
    console.log(docs);
  });
