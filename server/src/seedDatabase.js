import services from './services';

const { userService } = services;

const { createUser } = userService;

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

    console.log('seeding database complete');
  } catch (err) {
    console.log('seeding database failed');
    console.log(err);
  }
};

export default seedDatabase;
