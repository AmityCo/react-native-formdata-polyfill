import polyfill from '../../dist';

test('FormData.getAll exists in the dom', () => {
  expect(FormData.prototype.getAll).not.toBeUndefined();
});

test('polyfill is a function', () => {
  expect(polyfill).toBeInstanceOf(Function);
});

test('FormData.getAll remains unchanged in DOM', () => {
  const ref = FormData.prototype.getAll;

  polyfill();

  expect(FormData.prototype.getAll).toBe(ref);
});
