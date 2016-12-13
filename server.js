import express from 'express';
import { apolloServer } from 'apollo-server';
import schema from './data/myschema.graphql';
import Mocks from './data/mocks';
import resolvers from './data/resolvers';
const GRAPHQL_PORT = 8080;

const graphQLServer = express();
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: [schema],
  resolvers: resolvers
  // mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
