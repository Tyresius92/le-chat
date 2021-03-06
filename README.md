# le-chat

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Le Chat is a browser-based chat application intended to provide an open source alternative for folks who want to avoid giving their data to the folks at the Big Blue F (among others).

## Prerequisites

(Once we have a working MVP) Users just need a working internet browser. Development work is tested in the latest version of Chrome, but most other browsers should work.

## How to Use

To sign up for an account, navigate to (domain name TBD).

## Track our progress

We've set up a Trello board to track new features and the status of issue resolutions. Check it out [here](https://trello.com/b/VtxxQngU/le-chat-app)

## Contributing

We follow the Fork and PR contribution process. You can find a description of this process [here](https://mattstauffer.com/blog/how-to-contribute-to-an-open-source-github-project-using-your-own-fork/).

Having trouble getting set up? Maybe our docs need clarification. Let us know by asking a question [here](https://github.com/Tyresius92/le-chat/issues/new?template=question-template.md)

### Getting Started

Run `npm install` in the root directory. Dependencies for client and server will be installed automatically.

You need to separately install an instance of PostGres on your dev machine and have it running. You can find instructions for this [here](https://www.postgresql.org/docs/current/tutorial-install.html). Set up a user that matches your `.env` file, below.

You will need to create a file called `.env` in `server/` with the following format. It can vary based on your own PostGres setup, but all keys must exist.

```
DATABASE=le_chat_db
DATABASE_PORT=5432
DATABASE_HOST=localhost
DATABASE_USER=chatadmin
DATABASE_PASSWORD=postgres

SECRET=b3tt3rCh3ckY0u4531fb34y0uwr3cky0ur531f
```

Next, on the command line, run `psql -U <DATABASE_USER>` and use your `DATABASE_PASSWORD` to log into the postgres CLI. Then run `CREATE DATABASE le_chat_db;` (Don't forget the semicolon!). Run `exit` to return to your normal command line.

Then run `sh server/src/init_dev_db.sh` to create the tables (modify the initial line to match your `.env` file). (This script can be used to remove and re-create all of the DB tables.)

Now, to actually put data into your database, change the `if` statement in `server/src/index.js` so that `seedDatabase()` runs on startup, then change it back (we only need to seed the DB once). Your resolvers should now return data.

### Commands

### `npm run start`

You can start both the client and the server by running `npm run start` in the root directory. This will combine the logs for both in a single stream.

To have separate logs, you can run `npm client-start` and `npm server-start` in separate terminal windows. Alternatively, run `npm run start` in separate terminal windows from `server` and `client` directory.

### `npm run test`

Runs the tests for client and server concurrently.

Tests can be run for `server` and `client` separately by running the same command from the server and client directories, respectively.

### `npm run sniff`

Checks for code smells - runs the linter and verifies that prettier has been run on all files.

Same command can be run from `client` and `server` directories.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/marcgaj"><img src="https://avatars3.githubusercontent.com/u/15946968?v=4" width="100px;" alt=""/><br /><sub><b>marcgaj</b></sub></a><br /><a href="https://github.com/Tyresius92/le-chat/commits?author=marcgaj" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Tyresius92"><img src="https://avatars3.githubusercontent.com/u/28957445?v=4" width="100px;" alt=""/><br /><sub><b>Tyrel</b></sub></a><br /><a href="https://github.com/Tyresius92/le-chat/commits?author=Tyresius92" title="Code">💻</a></td>
    <td align="center"><a href="http://www.benmorrison.me"><img src="https://avatars1.githubusercontent.com/u/19583311?v=4" width="100px;" alt=""/><br /><sub><b>Ben Morrison</b></sub></a><br /><a href="https://github.com/Tyresius92/le-chat/commits?author=benjimorr" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Acknowledgements

None at present

## Contact

Ask a question by creating an issue here: https://github.com/Tyresius92/le-chat/issues/new
For inquiries directed to individual developers, please check GitHub profiles for contact details.

## License

MIT
