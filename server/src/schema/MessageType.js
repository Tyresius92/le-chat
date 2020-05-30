import { gql } from 'apollo-server';

export const MessageType = gql`
  type Message {
    id: ID!
    text: String!
    sendTime: DateTime!
    sender: User!
    conversation: Conversation!
  }
`;

export const MessageResolvers = {
  Message: {
    id: () => '1',
    text: () => 'Hello World',
    sendTime: () => new Date(),
    sender: () => ({}),
    conversation: () => ({}),
  },
};
