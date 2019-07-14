"use strict";
var prisma_lib = require("prisma-client-lib");
var typeDefs = `type AggregateResource {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createResource(data: ResourceCreateInput!): Resource!
  updateResource(data: ResourceUpdateInput!, where: ResourceWhereUniqueInput!): Resource
  updateManyResources(data: ResourceUpdateManyMutationInput!, where: ResourceWhereInput): BatchPayload!
  upsertResource(where: ResourceWhereUniqueInput!, create: ResourceCreateInput!, update: ResourceUpdateInput!): Resource!
  deleteResource(where: ResourceWhereUniqueInput!): Resource
  deleteManyResources(where: ResourceWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  resource(where: ResourceWhereUniqueInput!): Resource
  resources(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resource]!
  resourcesConnection(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResourceConnection!
  node(id: ID!): Node
}

type Resource {
  id: ID!
  name: String
  hash: String
  size: Int
  filetype: String
}

type ResourceConnection {
  pageInfo: PageInfo!
  edges: [ResourceEdge]!
  aggregate: AggregateResource!
}

input ResourceCreateInput {
  id: ID
  name: String
  hash: String
  size: Int
  filetype: String
}

type ResourceEdge {
  node: Resource!
  cursor: String!
}

enum ResourceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  hash_ASC
  hash_DESC
  size_ASC
  size_DESC
  filetype_ASC
  filetype_DESC
}

type ResourcePreviousValues {
  id: ID!
  name: String
  hash: String
  size: Int
  filetype: String
}

type ResourceSubscriptionPayload {
  mutation: MutationType!
  node: Resource
  updatedFields: [String!]
  previousValues: ResourcePreviousValues
}

input ResourceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResourceWhereInput
  AND: [ResourceSubscriptionWhereInput!]
  OR: [ResourceSubscriptionWhereInput!]
  NOT: [ResourceSubscriptionWhereInput!]
}

input ResourceUpdateInput {
  name: String
  hash: String
  size: Int
  filetype: String
}

input ResourceUpdateManyMutationInput {
  name: String
  hash: String
  size: Int
  filetype: String
}

input ResourceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  filetype: String
  filetype_not: String
  filetype_in: [String!]
  filetype_not_in: [String!]
  filetype_lt: String
  filetype_lte: String
  filetype_gt: String
  filetype_gte: String
  filetype_contains: String
  filetype_not_contains: String
  filetype_starts_with: String
  filetype_not_starts_with: String
  filetype_ends_with: String
  filetype_not_ends_with: String
  AND: [ResourceWhereInput!]
  OR: [ResourceWhereInput!]
  NOT: [ResourceWhereInput!]
}

input ResourceWhereUniqueInput {
  id: ID
}

type Subscription {
  resource(where: ResourceSubscriptionWhereInput): ResourceSubscriptionPayload
}
`

const {ipfsInit, configInit, bootstrap } = require('./loader')
let config = configInit()
console.log(config)

var models = [
  {
    name: "Resource",
    embedded: false
  }
];
const Prisma = prisma_lib.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: config.api_host
});

export default new Prisma();
