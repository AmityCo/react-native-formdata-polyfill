import polyfill from '../../dist';

global.navigator = null as unknown as Navigator;
// @ts-ignore
const { FormData } = global;

test('FormData doesnt exist in node', () => {
  expect(FormData).toBeUndefined();
});

test('polyfill is a function', () => {
  expect(polyfill).toBeInstanceOf(Function);
});

test('FormData.getAll remains unchanged in node', () => {
  polyfill();
  expect(FormData).toBeUndefined();
});
