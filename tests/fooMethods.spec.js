import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { addFoo } from '../imports/api/foo/methods';

describe('demo', () => {
  it('should add foo', () => {
    expect(ValidatedMethod).toHaveBeenCalledWith({
      name: 'Foo.add',
      run: jasmine.any(Function),
      validate: undefined,
    });
  });
});
