import services from './services';

const { userService, conversationService } = services;

const { createUser } = userService;
const { createConversation } = conversationService;

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
      'cong@gmail.com',
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

    console.log(conversation1);

    console.log('seeding database complete');
  } catch (err) {
    console.log('seeding database failed');
    console.log(err);
  }
};

export default seedDatabase;
