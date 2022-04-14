const request = require('supertest');
import server from 'http://localhost:8080';
import Cookies from 'js-cookie'

jest.mock('../../server/controllers/cookieController');
import cookieController from '../../server/controllers/cookieController';

const mockCookie = {auth}

beforeEach(async () => {
  Cookies.get = jest.fn().mockImplementation(() => "ACCESS_TOKEN");
})
