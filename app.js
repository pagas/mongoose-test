var Book = require('./book.model.js');
var BookService = require('./book.service.js');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
})

// establish connection to the mongoDB
var myDB = 'mongodb://localhost/test';
mongoose.connect(myDB);

app.get('/', (req, res) => {
  res.send('the root url');
});

app.get('/books', (req, res) => {
  Book.find({}).exec(function(err, books) {
    if (err) {
      res.send('error message has occur');
    }
    console.log(books);
    res.json(books);
  });
});

app.get('/insert', (req, res) => {
  let bookService = new BookService();
  bookService.insertDefault();
  console.log('successful');
})

app.get('/books/:id', (req, res) => {
  Book.findOne({_id: req.params.id}).exec(function(err, book) {
    console.log(book);
    res.json(book);
  })
});

console.log('done');
