import { gql } from "apollo-server";

const schema = gql`
  scalar Date

  type User {
    id: ID!
    username: String!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Query {
    userSesssion(me: Boolean!): UserSession
  }
`;

export default schema;