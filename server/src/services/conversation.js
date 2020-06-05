import db from '../db';

const addUserToConversation = (conversationId, userId) =>
  db.query(
    `INSERT INTO users_conversations (conversation_id, user_id)
      VALUES ($1, $2)`,
    [parseInt(conversationId, 10), parseInt(userId, 10)]
  );

const createConversation = async (topic, userIds) => {
  const response = await db.query(
    `INSERT INTO conversations (topic, created_time) VALUES ($1, NOW())
    RETURNING id, topic`,
    [topic]
  );

  const newConversation = response.rows[0];

  // TODO: (maybe) - This approach is not ideal,
  // since it makes many calls to the DB instead of one
  await Promise.all(
    userIds.map(userId => {
      addUserToConversation(newConversation.id, userId);
    })
  );

  return {
    conversation: {
      id: newConversation.id,
      topic: newConversation.topic,
      users: userIds.map(id => ({ id })),
      messages: [],
    },
  };
};

export default { createConversation };
