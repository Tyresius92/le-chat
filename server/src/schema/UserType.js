import { gql } from 'apollo-server';

export const UserType = gql`
  extend type Query {
    currentUser: User
    user(id: ID!): User
    users: [User!]!
  }

  type User {
    id: ID!
    username: String!
    email: EmailAddress!
    conversations: [Conversation!]!
  }
`;

export const UserResolvers = {
  Query: {
    currentUser: () => null,
    user: (parent, args, { services }) =>
      services.userService.fetchUserById(args.id),
    users: (parent, args, { services }) => services.userService.fetchUsers(),
  },

  User: {
    conversations: () => [],
  },
};
