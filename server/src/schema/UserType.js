import { gql, AuthenticationError, UserInputError } from 'apollo-server';

export const UserType = gql`
  extend type Query {
    currentUser: User
    user(id: ID!): User
    users: [User!]!
  }

  extend type Mutation {
    signUp(input: NewUserInput!): UserLoginPayload!
    signIn(input: UserLoginInput!): UserLoginPayload!
  }

  type User {
    id: ID!
    username: String!
    email: EmailAddress!
    conversation(conversationId: ID!): Conversation
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
    signIn: async (
      parent,
      { input: { emailOrUsername, password } },
      { services: { userService }, secret }
    ) => {
      const user = await userService.fetchUserByLogin(emailOrUsername);

      if (!user) {
        throw new UserInputError('No user found with that login');
      }

      const isPasswordValid = await userService.validatePassword(
        user.password_hash,
        password
      );

      if (!isPasswordValid) {
        throw new AuthenticationError('Invalid password');
      }

      const token = await userService.createToken(user, secret, '30d');

      return {
        user,
        token,
      };
    },
  },

  User: {
    id: user => user.id,
    conversation: async (
      user,
      { conversationId },
      { currentUser, services }
    ) => {
      const participants = await services.conversationService.fetchUsersByConversationId(
        conversationId
      );

      const participantIds = participants.map(user => user.id);

      if (
        participantIds.includes(currentUser.id) &&
        participantIds.includes(user.id)
      ) {
        return await services.conversationService.fetchConversationByConversationId(
          conversationId
        );
      }

      return null;
    },
    conversations: (user, args, context) =>
      context.services.userService.fetchConversationsByUserId(user.id),
  },
};
