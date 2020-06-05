import { gql } from 'apollo-server';

export const NewConversationInputType = gql`
  input NewConversationInput {
    topic: String!
    userIds: [ID!]!
  }
`;
