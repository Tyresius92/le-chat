import { UserResolvers } from '../UserType';

describe('UserResolvers', () => {
  const { Query, User } = UserResolvers;

  describe('Query', () => {
    const { currentUser, user, users } = Query;

    describe('currentUser', () => {
      it('returns null', () => {
        expect(currentUser()).toBe(null);
      });
    });
  });
});
