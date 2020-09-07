import { gql, AuthenticationError } from 'apollo-server';

export const ConversationType = gql`
  extend type Mutation {
    createConversation(input: NewConversationInput!): NewConversationPayload!
  }

  type Conversation {
    id: ID!
    topic: String!
    lastMessage: Message
    messages: [Message!]!
    users: [User!]!
  }
`;

export const ConversationResolvers = {
  Mutation: {
    createConversation: (
      parent,
      { input: { topic, userIds } },
      { services: { conversationService } }
    ) => conversationService.createConversation(topic, userIds),
  },

  Conversation: {
    id: conversation => conversation.id,
    messages: (
      conversation,
      args,
      { currentUser, services: { conversationService } }
    ) => {
      const users = conversationService.fetchUsersByConversationId(
        conversation.id
      );
      const userIds = users.map(user => user.id);

      if (!userIds.includes(currentUser.id)) {
        throw new AuthenticationError(
          `Logged in user is not a participant of conversation. User ID ${currentUser.id}; Conversation ID ${conversation.id}`
        );
      }

      return conversationService.fetchMessagesByConversationId(conversation.id);
    },
    users: (conversation, args, { services: { conversationService } }) =>
      conversationService.fetchUsersByConversationId(conversation.id),
  },
};
