const tendang = require('./tendang');

const URL = process.env.URL || 'http://localhost:5000';
const TOKEN = process.env.TOKEN || 'deUbxOQDuCcoPXkuMrRKbGl771d5GZbIkSNjinSqIYGJNc8dTBrg7Qahu3akP934';

test('deploy success', () => expect(tendang(URL, TOKEN, 'withoutvalue')).resolves.toEqual('🎉 Deployment successfully.'));

test('deploy success with value', () => expect(tendang(URL, TOKEN, 'withvalue', 'hello')).resolves.toEqual('🎉 Deployment successfully.'));

test('deploy unauthorized', () => expect(tendang(URL, 'invalidtoken', 'withoutvalue')).rejects.toThrowError('👮 Deployment unauthorized, please check your token or your deployment name.'));

test('deploy value invalid', () => expect(tendang(URL, TOKEN, 'withvalue', 'invalid value')).rejects.toThrowError('🚫 Deployment failed, request invalid check your value.'));

test('deployment failed', () => expect(tendang(URL, TOKEN, 'failrequest')).rejects.toThrowError('❌ Deployment failed, please check tendang log.'));

test('name not available', () => expect(tendang(URL, TOKEN)).rejects.toThrowError('👮 Deployment unauthorized, please check your token or your deployment name.'));

test('reject other error', () => expect(tendang('invalid url', TOKEN, 'withvalue')).rejects.toThrowError('❌ '));
