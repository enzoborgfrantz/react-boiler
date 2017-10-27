import { helloWorld } from '../modules/hello.module';

test('it returns the string: hello world', () => {
  const expectedOutput = 'hello world';
  const actualOutput = helloWorld();
  expect(actualOutput).toEqual(expectedOutput);
});
