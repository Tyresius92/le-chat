import { gql } from 'apollo-server';

export const UserType = gql`
  extend type Query {
    currentUser: User
    user(id: ID!): User
    users: [User!]!
  }

  extend type Mutation {
    signUp(input: NewUserInput!): UserLoginPayload!
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
    currentUser: (parent, args, { currentUser }) => currentUser,
    user: (parent, args, { services: { userService } }) =>
      userService.fetchUserById(args.id),
    users: (parent, args, { services: { userService } }) =>
      userService.fetchUsers(),
  },

  Mutation: {
    signUp: async (
      parent,
      { input: { email, username, password } },
      { services: { userService }, secret }
    ) => {
      const user = await userService.createUser(username, email, password);
      const token = await userService.createToken(user, secret, '30d');

      return { user, token };
    },
  },

  User: {
    id: user => user.id,
    conversations: (user, args, context) =>
      context.services.userService.fetchConversationsByUserId(user.id),
  },
};
