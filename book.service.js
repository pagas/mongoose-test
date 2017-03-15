var Book = require('./book.model.js');
class BookService {
  insert(options) {

  }
  insertDefault() {
    // create a blog post
    var book = new Book({
      title: 'test',
      author: 'paulius',
      category: 'IT'
    });

    book.save(function (err) {
      if (!err) console.log('Success!');
    });
  }
}

module.exports = BookService;
