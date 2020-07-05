PGPASSWORD=postgres psql -U chatadmin -d le_chat_db -c "
	DROP TABLE IF EXISTS users_conversations CASCADE;
	DROP TABLE IF EXISTS users CASCADE;
	DROP TABLE IF EXISTS conversations CASCADE;
	DROP TABLE IF EXISTS messages CASCADE;

	CREATE TABLE users (
		id SERIAL PRIMARY KEY,
		username VARCHAR (50) UNIQUE NOT NULL,
		email VARCHAR (50) UNIQUE NOT NULL,
		password_hash VARCHAR (60) NOT NULL
	);

	CREATE TABLE conversations (
		id SERIAL PRIMARY KEY,
		topic TEXT NOT NULL,
		created_time TIMESTAMP NOT NULL
	);

	CREATE TABLE users_conversations (
		id SERIAL,
		user_id INTEGER NOT NULL REFERENCES users(id),
		conversation_id INTEGER NOT NULL REFERENCES conversations(id),
		PRIMARY KEY (user_id, conversation_id)
	);

	CREATE TABLE messages (
		id SERIAL PRIMARY KEY,
		sender_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
		conversation_id INTEGER NOT NULL REFERENCES conversations(id),
		text TEXT NOT NULL, 
		send_time TIMESTAMP NOT NULL
	);
"