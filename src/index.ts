import { GraphQLServer } from 'graphql-yoga'
import sofa from 'sofa-api'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema, IResolvers } from 'graphql-tools'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
} as any)

const typeDefs = importSchema('./src/schema.graphql')
const schema = makeExecutableSchema({ typeDefs, resolvers: resolvers as IResolvers })
server.use('/rest', sofa({ schema, context: { prisma } }));

const options = {
  port: 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/graphql',
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)