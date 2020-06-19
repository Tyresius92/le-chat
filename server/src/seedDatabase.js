import services from './services';

const { userService, conversationService, messageService } = services;

const { createUser } = userService;
const { createConversation } = conversationService;
const { createMessage } = messageService;

const seedDatabase = async () => {
  console.log('seeding database');

  try {
    const user1 = await createUser(
      'tyresius92',
      'tyresius92@gmail.com',
      'AwesomePassword'
    );
    const user2 = await createUser(
      'marcGaj',
      'marcGaj@gmail.com',
      'lessAwesomePassword'
    );
    const user3 = await createUser(
      'benjiMorr',
      'benjiMorr@gmail.com',
      'moreAwesomePassword'
    );
    const user4 = await createUser('tyrel', 'tyrel@gmail.com', 'ButtsMcGee');

    console.log(user1, user2, user3, user4);

    const conversation1 = await createConversation('My first topic!', [
      user1.id,
      user3.id,
    ]);
    const conversation2 = await createConversation('Pokemon are cool', [
      user2.id,
      user3.id,
    ]);
    const conversation3 = await createConversation('Open source rules!', [
      user1.id,
      user2.id,
    ]);
    const conversation4 = await createConversation(
      'Grease is a pretty underrated movie',
      [user1.id, user2.id, user3.id]
    );

    console.log(conversation1, conversation2, conversation3, conversation4);

    const message1 = await createMessage(
      user1.id,
      conversation1.conversation.id,
      'hello world!'
    );
    const message2 = await createMessage(
      user2.id,
      conversation2.conversation.id,
      'Charizard is the best'
    );
    const message3 = await createMessage(
      user1.id,
      conversation4.conversation.id,
      'Danny Zuko is soooooo cute'
    );
    const message4 = await createMessage(
      user3.id,
      conversation1.conversation.id,
      'goodbye world!'
    );
    const message5 = await createMessage(
      user3.id,
      conversation2.conversation.id,
      'No, Blastoise is the best!'
    );
    const message6 = await createMessage(
      user1.id,
      conversation3.conversation.id,
      'Le Chat is teaching me so much'
    );

    console.log('seeding database complete');
  } catch (err) {
    console.log('seeding database failed');
    console.log(err);
  }
};

export default seedDatabase;
