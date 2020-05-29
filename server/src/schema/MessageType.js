import { gql } from 'apollo-server';

export const MessageType = gql`
  type Message {
    id: ID!
    text: String!
    sendTime: DateTime!
    sender: ID!
    conversation: ID!
  }
`;

export const MessageResolvers = {
  Message: {
    id: () => '1',
    text: () => 'Hello World',
    sendTime: () => new Date(),
    sender: () => ({
      id: '1',
      username: 'Tyresius',
      email: 'hello@goodbye.com',
      conversations: [],
    }),
    conversation: () => ({}),
  },
};
