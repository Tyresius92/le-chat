import { RootQueryType, RootQueryResolvers } from './QueryType.js';
import { CustomScalars, CustomScalarsResolvers } from './CustomScalars';
import { UserType, UserResolvers } from './UserType.js';
import { ConversationType, ConversationResolvers } from './ConversationType';
import { MessageType, MessageResolvers } from './MessageType';

export const typeDefs = [
  RootQueryType,
  CustomScalars,
  UserType,
  ConversationType,
  MessageType,
];

export const resolvers = {
  ...RootQueryResolvers,
  ...CustomScalarsResolvers,
  ...UserResolvers,
  ...ConversationResolvers,
  ...MessageResolvers,
};
