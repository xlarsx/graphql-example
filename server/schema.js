const fs = require('fs');
const path = require('path');

const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');

const MOCK_DATA = false;

// Load shared schema, other options: https://www.npmjs.com/package/graphql-tag
const typeDefs = fs.readFileSync(path.join(__dirname, '../schema.graphql'), 'utf8');

const resolvers = {
  Query: {
    findPerson(root, { id }){
      // Fetch it from any source
      return Promise.resolve({
        id,
        name: 'PERSON_NAME',
        age: 20,
      });
    },
  },
};

const schema = makeExecutableSchema({ resolvers, typeDefs });

// Add mocks if required
addMockFunctionsToSchema({
  schema,
  mocks: {},
  preserveResolvers: !MOCK_DATA,
});

// To merge schemas: https://www.apollographql.com/docs/graphql-tools/schema-stitching.html
module.exports = schema;
