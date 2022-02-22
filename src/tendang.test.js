const tendang = require('./tendang');
const messages = require('./messages');

const URL = process.env.URL || 'http://localhost:5000';
const TOKEN = process.env.TOKEN || 'deUbxOQDuCcoPXkuMrRKbGl771d5GZbIkSNjinSqIYGJNc8dTBrg7Qahu3akP934';

describe('success test', () => {
  test('without value', () => expect(tendang(URL, TOKEN, 'withoutvalue')).resolves.toEqual(messages.SUCCESS));
  test('with value', () => expect(tendang(URL, TOKEN, 'withvalue', 'hello')).resolves.toEqual(messages.SUCCESS));
});

describe('failed test', () => {
  test('unauthorized', () => expect(tendang(URL, 'invalidtoken', 'withoutvalue')).rejects.toThrowError(messages.UNAUTHORIZED));
  test('value invalid', () => expect(tendang(URL, TOKEN, 'withvalue', 'invalid value')).rejects.toThrowError(messages.INVALID_VALUE));
  test('failed', () => expect(tendang(URL, TOKEN, 'failrequest')).rejects.toThrowError(messages.DEPLOYMENT_FAILED));
  test('timeout', () => expect(tendang(URL, TOKEN, 'longrequest')).rejects.toThrowError(messages.DEPLOYMENT_TIMEOUT), 30000);
  test('name not available', () => expect(tendang(URL, TOKEN)).rejects.toThrowError(messages.UNAUTHORIZED));
  test('reject other error', () => expect(tendang('invalid url', TOKEN, 'withvalue')).rejects.toThrowError('❌ '));
});
