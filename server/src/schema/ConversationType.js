import { gql } from 'apollo-server';

export const ConversationType = gql`
  extend type Mutation {
    createConversation(input: NewConversationInput!): NewConversationPayload!
  }

  type Conversation {
    id: ID!
    topic: String!
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
    messages: () => [],
    users: (conversation, args, { services: { conversationService } }) =>
      conversationService.fetchUsersByConversationId(conversation.id),
  },
};
