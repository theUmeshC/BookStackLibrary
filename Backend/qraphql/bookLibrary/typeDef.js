import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const bookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        publishDate: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    })
})
