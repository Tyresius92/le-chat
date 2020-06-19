import db from '../db';

const createMessage = async (senderId, conversationId, text) => {
  // hmmm. the name fetch seems funny in this context.
  // what if we change the names of these to be queryOne or similar?
  return await db.fetch(
    `INSERT INTO messages (sender_id, conversation_id, text, send_time)
    VALUES ($1, $2, $3, NOW())
    RETURNING id, text, sender_id, conversation_id`,
    [senderId, conversationId, text]
  );
};

export default {
  createMessage,
};
