import db from '../db';

const addUserToConversation = async (conversationId, userId) =>
  await db.query(
    `INSERT INTO users_conversations (conversation_id, user_id)
    VALUES ($1, $2)`,
    [parseInt(conversationId, 10), parseInt(userId, 10)]
  );

const createConversation = async (topic, userIds) => {
  const response = await db.query(
    `INSERT INTO conversations (topic, created_time) 
    VALUES ($1, NOW())
    RETURNING id, topic`,
    [topic]
  );

  const newConversation = response.rows[0];

  // TODO (maybe): This approach is not ideal,
  // since it makes many calls to the DB instead of one
  // see if you can figure out how to do this in a single call
  await Promise.all(
    userIds.map(userId => addUserToConversation(newConversation.id, userId))
  );

  return {
    conversation: {
      id: newConversation.id,
      topic: newConversation.topic,
    },
  };
};

const fetchUsersByConversationId = async conversationId => {
  const dbResponse = await db.query(
    `SELECT 
      uc.user_id AS id, 
      u.username, 
      u.email 
    FROM users AS u
    INNER JOIN users_conversations AS uc ON u.id = uc.user_id 
    WHERE uc.conversation_id = $1`,
    [conversationId]
  );

  return dbResponse.rows;
};

const fetchConversationByConversationId = async conversationId =>
  await db.fetch('SELECT * FROM conversations WHERE id = $1', [conversationId]);

const fetchMessagesByConversationId = async conversationId =>
  await db.fetchAll('SELECT * FROM messages WHERE conversation_id = $1', [
    conversationId,
  ]);

export default {
  createConversation,
  fetchUsersByConversationId,
  fetchConversationByConversationId,
  fetchMessagesByConversationId,
};
