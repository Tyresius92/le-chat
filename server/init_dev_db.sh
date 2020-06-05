PGPASSWORD=postgres psql -U chatadmin -d le_chat_db -c "
	DROP TABLE IF EXISTS users;
	DROP TABLE IF EXISTS conversations;
	DROP TABLE IF EXISTS messages;
	DROP TABLE IF EXISTS users_conversations;

	CREATE TABLE users (
		id SERIAL PRIMARY KEY,
		username VARCHAR (50) UNIQUE NOT NULL,
		email VARCHAR (50) UNIQUE NOT NULL,
		password_hash VARCHAR (60) NOT NULL
	);

	CREATE TABLE messages (
		id SERIAL PRIMARY KEY,
		sender_id INTEGER NOT NULL,
		conversation_id INTEGER NOT NULL,
		text TEXT NOT NULL, 
		send_time TIMESTAMP NOT NULL
	);

	CREATE TABLE conversations (
		id SERIAL PRIMARY KEY,
		topic TEXT NOT NULL,
		created_time TIMESTAMP NOT NULL
	);

	CREATE TABLE users_conversations (
		id SERIAL PRIMARY KEY,
		user_id INTEGER NOT NULL,
		conversation_id INTEGER NOT NULL
	);
"