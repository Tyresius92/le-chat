import { gql } from 'apollo-server';

export const ConversationType = gql`
  type Conversation {
    id: ID!
    messages: [Message!]!
    userIds: [ID!]!
  }
`;

export const ConversationResolvers = {
  Conversation: {
    id: () => '1',
    messages: () => [],
    userIds: conversation => conversation.userIds,
  },
};
