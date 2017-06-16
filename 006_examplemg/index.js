var fs = require("fs1");

fs.appendFile('mynewfile.txt', 'Hola mundo', 
function(err) {
    if(err)
        throw err;
    console.log('Saved!');
});