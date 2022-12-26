import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import cors from "cors";

import { sequelize } from "./util/database.js";
import bookMutation from "./qraphql/bookLibrary/mutations.js";
import bookQuery from "./qraphql/bookLibrary/query.js";

// initializing express server
const app = express();

// middleware for Cross-Origin Resource Sharing i.e., to different domains(like Localhost3000(React) and Localhost8800(server))
app.use(cors());

// middleware to parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...bookQuery,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...bookMutation,
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: Query,
      mutation: Mutation,
    }),
    graphiql: true,
  })
);

sequelize
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("listening to port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
