const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema");
const { categories, products, reviews } = require("./db");
const { Query } = require("./resolver/Query")
const { Category } = require("./resolver/Category")
const { Product } = require("./resolver/Product")

//String, Int, Float, Boolean Scaler type



const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    },
    context: {
        categories,
        products,
        reviews
    }
});

server.listen().then(({ url }) => {
    console.log(`
        Server is running!
        Listening on port ${url}
    `);
})