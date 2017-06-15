var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var User = mongoose.model('User2', schema, 'users2');

var user1 = new User({
  name: 'User 1',
  email: 'user1@ittepic.edu.mx'
});
//Guardo utilizando la instancia del model User
user1.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Saved User 1!!");
});


var user2 = {
  name: 'User 2',
  email: 'user2@ittepic.edu.mx'
}
//Guardo utilizando directamente el modelo y 
//un objeto denominado user2
User.create(user2, function(error){
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Saved User 2!!");
});

//Guardo utilizando directamente el modelo y 
//un objeto directamente en el método create
User.create({name: 'User 3', email: 'user3@ittepic.edu.mx'}, 
  function(error){
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log("Saved User 3!");
  });