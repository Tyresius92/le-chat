// Root Types
import { RootQueryType, RootQueryResolvers } from './QueryType.js';
import { RootMutationType, RootMutationResolvers } from './MutationType.js';
import { CustomScalars, CustomScalarsResolvers } from './CustomScalars';

// User types
import { UserType, UserResolvers } from './UserType.js';
import { NewUserInputType } from './NewUserInputType';
import { UserLoginPayloadType } from './UserLoginPayloadType';

// Conversation Types
import { ConversationType, ConversationResolvers } from './ConversationType';

// Message Types
import { MessageType, MessageResolvers } from './MessageType';

export const typeDefs = [
  // Root Types
  RootQueryType,
  RootMutationType,
  CustomScalars,

  // User Types
  UserType,
  NewUserInputType,
  UserLoginPayloadType,

  // Conversation Types
  ConversationType,

  // Message Types
  MessageType,
];

export const resolvers = {
  // Root Resolvers
  ...RootQueryResolvers,
  ...RootMutationResolvers,
  ...CustomScalarsResolvers,

  // User Resolvers
  ...UserResolvers,

  // Converation Resolvers
  ...ConversationResolvers,

  // Message Resolvers
  ...MessageResolvers,
};
