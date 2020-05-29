import { gql } from 'apollo-server';

const fakeUsers = [
  {
    id: '1',
    username: 'Tyresius',
    email: 'hello@goodbye.com',
    conversations: [
      {
        id: '1',
        messages: [],
        userIds: ['1', '3'],
      },
      {
        id: '2',
        messages: [],
        userIds: ['1', '2'],
      },
    ],
  },
  {
    id: '2',
    username: 'BenjiMorr',
    email: 'goodbye@hello.com',
    conversations: [
      {
        id: '3',
        messages: [],
        userIds: ['2', '3'],
      },
      {
        id: '2',
        messages: [],
        userIds: ['1', '2'],
      },
    ],
  },
  {
    id: '3',
    username: 'CongLiu',
    email: 'hello@world.com',
    conversations: [
      {
        id: '1',
        messages: [],
        userIds: ['1', '3'],
      },
      {
        id: '3',
        messages: [],
        userIds: ['2', '3'],
      },
    ],
  },
];

export const UserType = gql`
  extend type Query {
    currentUser: User
    user(id: ID!): User
    users: [User!]!
  }

  type User {
    id: ID!
    username: String!
    email: EmailAddress!
    conversations: [Conversation!]!
  }
`;

export const UserResolvers = {
  Query: {
    currentUser: () => fakeUsers[2],
    user: (parent, args) => fakeUsers.find(user => user.id === args.id),
    users: () => fakeUsers,
  },
};
