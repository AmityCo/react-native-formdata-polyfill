import polyfill from '../../dist';

test('FormData.getAll exists in the dom', () => {
  // @ts-ignore
  expect(FormData.prototype.getAll).not.toBeUndefined();
});

test('polyfill is a function', () => {
  expect(polyfill).toBeInstanceOf(Function);
});

test('FormData.getAll remains unchanged in DOM', () => {
  // @ts-ignore
  const ref = FormData.prototype.getAll;

  polyfill();

  // @ts-ignore
  expect(FormData.prototype.getAll).toBe(ref);
});
