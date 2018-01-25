const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const graphQLServer = express();

graphQLServer.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

graphQLServer.listen(3000);