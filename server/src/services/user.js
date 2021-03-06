import db from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = async (user, secret, expiresIn) => {
  const { id, email, username } = user;
  return await jwt.sign({ id, email, username }, secret, { expiresIn });
};

const generatePasswordHash = async password => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const createUser = async (username, email, password) => {
  const passwordHash = await generatePasswordHash(password);

  const result = await db.query(
    `INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)
    RETURNING id, username, email`,
    [username, email, passwordHash]
  );

  return {
    ...result.rows[0],
  };
};

const fetchUsers = async () => {
  const data = await db.query('SELECT * FROM users');

  return data.rows;
};

const fetchUserById = async id => {
  const data = await db.query('SELECT * FROM users WHERE id = $1', [id]);

  return data.rows[0];
};

const validatePassword = async (passwordHash, attemptedPassword) =>
  await bcrypt.compare(attemptedPassword, passwordHash);

const fetchUserByEmail = async email =>
  await db.query('SELECT * FROM users WHERE email = $1 LIMIT 1', [email]);

const fetchUserByUsername = async username =>
  await db.query('SELECT * FROM users WHERE username = $1 LIMIT 1', [username]);

const fetchUserByLogin = async emailOrUsername => {
  let user = await fetchUserByUsername(emailOrUsername);

  if (!user.rows[0]) {
    user = await fetchUserByEmail(emailOrUsername);
  }

  return user.rows[0];
};

const fetchConversationsByUserId = async userId =>
  await db.fetchAll(
    `SELECT 
      uc.conversation_id AS id, 
      c.topic
    FROM conversations AS c
    INNER JOIN users_conversations AS uc ON c.id = uc.conversation_id 
    WHERE uc.user_id = $1`,
    [userId]
  );

export default {
  createUser,
  createToken,
  validatePassword,
  fetchUsers,
  fetchUserById,
  fetchUserByLogin,
  fetchConversationsByUserId,
};
