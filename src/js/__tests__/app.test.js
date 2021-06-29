import Validator from '../app';

test('Ckeck input', () => {
  expect(Validator.validateUsername('1aas55---___11asdsd55asd-_1axXa')).toBeFalsy();
  expect(Validator.validateUsername('-aas55---___11asdsd55asd-_1axXa')).toBeFalsy();
  expect(Validator.validateUsername('_aas55---___11asdsd55asd-_1axXa')).toBeFalsy();
  expect(Validator.validateUsername('яaas55---___11asdsd55asd-_1axXa')).toBeFalsy();
  expect(Validator.validateUsername('aas55---___11asdsd55asd-_1axXa1')).toBeFalsy();
  expect(Validator.validateUsername('aas55---___11asdsd55asd-_1axXa-')).toBeFalsy();
  expect(Validator.validateUsername('aas55---___11asdsd55asd-_1axXa_')).toBeFalsy();
  expect(Validator.validateUsername('aas55---___11asdsd55asd-_1axXaя')).toBeFalsy();
  expect(Validator.validateUsername('aas55---___11asdsd555asd-_1axXa')).toBeFalsy();
  expect(Validator.validateUsername('aas55---___11asdsd55asd-_1axXa')).toBeTruthy();
  expect(Validator.validateUsername('aa')).toBeTruthy();
  expect(Validator.validateUsername('a')).toBeTruthy();
});
