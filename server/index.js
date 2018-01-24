const express = require('express');
const graphqlHTTP = require('express-graphql');

const executableSchema = require('./schema');


const graphQLServer = express();

graphQLServer.use('/graphql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
}));

graphQLServer.listen(3000);