import { gql } from 'apollo-server';

export const NewConversationPayloadType = gql`
  type NewConversationPayload {
    conversation: Conversation!
  }
`;
