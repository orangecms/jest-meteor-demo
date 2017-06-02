import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const addFoo = new ValidatedMethod({
  name: 'Foo.add',
  validate: new SimpleSchema({
    bar: { type: String },
  }).validator(),
  run(bar) {
    console.log('foo', bar);
  },
});
