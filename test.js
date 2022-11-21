const { ApolloServer, gql } = require("apollo-server");


//String, Int, Float, Boolean Scaler type

const typeDefs = gql`
    type Query {
        hello: String!
        numberOfAnimals:Int!
        price:Float!
        isActive:Boolean!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello world!!!!",
        numberOfAnimals: () => 77,
        price: () => 55.55,
        isActive: () => true
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`
        Server is running!
        Listening on port ${url}
    `);
})