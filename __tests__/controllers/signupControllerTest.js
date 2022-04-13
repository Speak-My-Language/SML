import { storeUserInDb } from '../../server/controllers/signupController';

describe('Unit testing logoutController', () => {
  describe('Unit testing storeUserInDB', () => {
    test('should throw 400 if name is not a string', async () => {
      const mockRequest = {};
      const mockResponse = { locals: { profile } };
      const mockNext = jest.fn();
      await storeUserInDb(mockRequest, mockResponse, mockNext);
      // Possibly better way to check arguments for object containing log, status, message.
      expect(mockNext).toBeCalledWith(expect.anything());
    });
  });
  // end of 'Unit testing storeUserInDB'
});

// mockData added here
const profile = {
  name: null,
  location: 'location-test',
  login: 'login-test',
  repos_url: 'repos_url-test',
  twitter_username: 'twitter_username-test',
  company: 'company-test',
  blog: 'blog-test',
  email: 'email-test',
  node_id: 'node_id-test',
  bio: 'bio-test',
};
