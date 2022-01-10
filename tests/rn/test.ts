import polyfill from '../../dist';

// @ts-ignore
global.FormData = require('react-native/Libraries/Network/FormData');

Object.defineProperty(global.navigator, 'product', { value: 'ReactNative' });

// the thing we are looking to patch
// @ts-ignore
delete FormData.prototype.getAll;

test('FormData.getAll not exists in the dom', () => {
  // @ts-ignore
  expect(FormData.prototype.getAll).toBeUndefined();
});

test('polyfill is a function', () => {
  expect(polyfill).toBeInstanceOf(Function);
});

test('FormData.getAll has been changed in React Native', () => {
  // @ts-ignore
  const ref = FormData.prototype.getAll;

  polyfill();

  // @ts-ignore
  expect(ref).not.toBe(FormData.prototype.getAll);
});
