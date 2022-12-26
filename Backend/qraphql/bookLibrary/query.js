import { GraphQLInt, GraphQLList } from "graphql";
import { BookData } from "../../Models/bookModel.js";
import { bookType } from "./typeDef.js";

export const getBookList = {
  type: new GraphQLList(bookType),
  resolve: async () => {
    const bookList = await BookData.findAll().then((list) => {
      return list;
    });
    return bookList;
  },
};

export const getBookById = {
  type: bookType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (_, args) => {
    const [book] = await BookData.findAll({ where: { id: args.id } }).then(
      (item) => item
    );
    return book;
  },
};

const bookQuery =  { getBookList, getBookById };

export default bookQuery;