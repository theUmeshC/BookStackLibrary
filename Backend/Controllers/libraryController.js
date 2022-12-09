import { Library } from "../Models/library.js";

// controller to handle the get request for book list
export const getList = (req, res) => {
  Library.findAll().then((list) => {
    return res.json(list);
  });
};

// controller to handle the adding of a new book to database library table
export const postBook = (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const publishDate = req.body.publishDate;
  const imageUrl = req.body.imageUrl;
  Library.create({
    title: title,
    author: author,
    publishDate: publishDate,
    imageUrl: imageUrl,
  })
    .then((data) => {
      console.log("book added successfully");
      return res.json(data);
    })
    .catch((err) => console.log(err));
};

// controller to get the book wrt id from the database table
export const editBook = (req, res) => {
  const bookId = req.params.bookId;
  Library.findAll({ where: { id: bookId } })
    .then((book) => {
      return res.json(book);
    })
    .catch((err) => {
      console.log(err);
    });
};

// controller to handle updating the book details wrt to the id
export const postEditBook = (req, res) => {
  const bookId = req.params.bookId;
  const updatedTitle = req.body.title;
  const updatedAuthor = req.body.author;
  const updatedPublishDate = req.body.publishDate;
  const updatedImageUrl = req.body.imageUrl;
  Library.findAll({ where: { id: bookId } })
    .then(([book]) => {
      book.title = updatedTitle;
      book.author = updatedAuthor;
      book.imageUrl = updatedImageUrl;
      book.publishDate = updatedPublishDate;
      return book.save();
    })
    .then(() => {
      console.log("updated product");
    })
    .catch((err) => {
      console.log(err);
    });
};

// controller to delete the book details wrt to the id
export const deleteBook = (req, res) => {
  const bookId = req.params.bookId;
  Library.findAll({ where: { id: bookId } })
    .then(([book]) => {
      return book.destroy();
    })
    .then(() => {
      console.log("deleted book");
    })
    .catch((err) => {
      console.log(err);
    });
};

// controller to fetch a book wrt to title from library table from database
export const fetchBookByTitle = (req, res) => {
  const bookTitle = req.params.bookTitle;
  Library.findAll({ where: { title: bookTitle } })
    .then((book) => {
      return res.json(book);
    })
    .catch((err) => {
      console.log(err);
    });
};
