import { gql } from 'apollo-server';

export const ConversationType = gql`
  type Conversation {
    id: ID!
    messages: [Message!]!
    users: [User!]!
  }
`;

export const ConversationResolvers = {
  Conversation: {
    id: () => '1',
    messages: () => [],
    users: () => [],
  },
};
