var mongoose = require('mongoose');
// set a variable reference to a mongoose schema
var Schema = mongoose.Schema

// create our schema
var BookSchema = new Schema({
  title: String,
  author: String,
  cateogry: String
});

// need to create a instance of schema
// now we are able to use this schema by requiring this file
module.exports = mongoose.model('Book', BookSchema);
