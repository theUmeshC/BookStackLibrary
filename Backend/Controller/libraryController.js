import { Library } from "../model/library.js";

export const getList = (req, res) => {
  Library.findAll().then((list) => {
    return res.json(list);
  });
};

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

