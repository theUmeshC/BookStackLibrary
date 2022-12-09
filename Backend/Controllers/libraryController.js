import { Library } from "../Models/library.js";

// controller to handle the get request for book list
export const getList = (req, res) => {
  Library.findAll().then((list) => {
    return res.json(list);
  });
};

// controller to handle the adding of a new book to database library table
export const postBook = (req, res) => {
  console.log(req.body);
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
