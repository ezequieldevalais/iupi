
import { hello } from '../models/helloworld';
import { assert } from 'chai';
import 'mocha';

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = hello();
    assert.equal(result,'Hello world!');
  });

});