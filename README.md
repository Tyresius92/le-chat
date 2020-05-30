# le-chat

### Details that are needed when we write a proper README

You need to separately install an instance of PostGres on your dev machine and have it running.

You will need to create a file called `.env` in `server/src/` in the following format (this is my dev version, feel free to change your own dev version, but be sure to change the commands below to account for the changes).

```
DATABASE=le_chat_db
DATABASE_PORT=5432
DATABASE_HOST=localhost
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres

SECRET=b3tt3rCh3ckY0u4531fb34y0uwr3cky0ur531f
```

Finally, on the command line, run `psql -U <DATABASE_USER>` and use your `DATABASE_PASSWORD` to log into the postgres CLI. Then run `CREATE DATABASE le_chat_db;` (Don't forget the semicolon!), and then run `exit` to return to your normal command line.

To seed your database, change the `if` statement in `server/src/index.js` so that `seedDatabase()` runs on startup, then change it back. Your resolvers should now return data.

Random change so I have something to push
