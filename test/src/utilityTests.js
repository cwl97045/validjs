var mocha = require('mocha'),
assert = require('chai').assert;

describe('function', function (){
  describe('stuff', function (){
    it('zhoud be true', function (){
      assert.equal(0,0);
    });
  });
});

mocha.run();