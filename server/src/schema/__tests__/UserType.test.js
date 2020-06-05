import { UserResolvers } from '../UserType';

describe('UserResolvers', () => {
  const { Query } = UserResolvers;

  describe('Query', () => {
    const { currentUser } = Query;

    describe('currentUser', () => {
      it('returns null', () => {
        expect(currentUser()).toBe(null);
      });
    });
  });
});
