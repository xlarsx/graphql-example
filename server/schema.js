const fs = require('fs');
const path = require('path');

const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');

// Load shared schema
const Schema = fs.readFileSync(path.join(__dirname, '../schema.graphql'), 'utf8');

const Resolvers = {
  Query: {
    findPerson(root, { id }){
      // here you would write the code that returns an actual person object
      // but since we're using mocks, you don't have to.
    },
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: {},
  preserveResolvers: false,
});

module.exports = executableSchema;
