import { UserResolvers } from '../UserType';

describe('UserResolvers', () => {
  const { Query } = UserResolvers;

  describe('Query', () => {
    const { currentUser } = Query;

    describe('currentUser', () => {
      it('returns null if current user is null on the context', () => {
        expect(currentUser(null, null, { currentUser: null })).toBe(null);
      });

      it('returns the current user from the context', () => {
        expect(
          currentUser(null, null, { currentUser: 'this value is arbitrary' })
        ).toBe('this value is arbitrary');
      });
    });
  });
});
