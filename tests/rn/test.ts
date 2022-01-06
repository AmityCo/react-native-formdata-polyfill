import polyfill from '../../dist';

// certainty
global.navigator = {
  ...global.navigator,
  product: 'ReactNative',
};

// the thing we are looking to patch
delete FormData.prototype.getAll;

test('FormData.getAll exists in the dom', () => {
  expect(FormData.prototype.getAll).not.toBeUndefined();
});

test('polyfill is a function', () => {
  expect(polyfill).toBeInstanceOf(Function);
});

test('FormData.getAll has been changed in React Native', () => {
  const ref = FormData.prototype.getAll;

  polyfill();

  expect(ref).not.toBe(FormData.prototype.getAll);
});
