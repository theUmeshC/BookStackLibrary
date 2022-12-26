import { GraphQLInt, GraphQLString } from "graphql";
import { BookData } from "../../Models/bookModel.js";
import { bookType } from "./typeDef.js";

export const createBook = {
  type: bookType,
  args: {
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    publishDate: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const book = await BookData.create({
      title: args.title,
      author: args.author,
      publishDate: args.publishDate,
      imageUrl: args.imageUrl,
    })
      .then((data) => {
        console.log("book added successfully");
        return data;
      })
      .catch((err) => console.log(err));
    return book;
  },
};

export const getEditBook = {
  type: bookType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (_, args) => {
    const [book] = await BookData.findAll({ where: { id: args.id } })
      .then((book) => {
        return book;
      })
      .catch((err) => {
        console.log(err);
      });
    return book;
  },
};

export const postEditBook = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    publishDate: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    await BookData.findAll({ where: { id: args.id } })
      .then(([item]) => {
        item.title = args.title;
        item.author = args.author;
        item.imageUrl = args.imageUrl;
        item.publishDate = args.publishDate;
        return item.save();
      })
      .then(() => {
        return "updated product";
      })
      .catch((err) => {
        console.log(err);
        return "error updating";
      });
    return "updated product";
  },
};

export const deleteBook = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (_, args) => {
    await BookData.destroy({
      where: {
        id: args.id,
      },
    }).catch((err) => {
      console.log(err);
      return "not found";
    });
  },
};

export const fetchBookByTitle = {
  type: bookType,
  args: {
    title: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const [book] = await BookData.findAll({ where: { title: args.title } })
      .then((book) => {
        return book;
      })
      .catch((err) => {
        console.log(err);
      });
    return book;
  },
};

const bookMutation = {
  createBook,
  getEditBook,
  postEditBook,
  deleteBook,
  fetchBookByTitle,
};

export default bookMutation;