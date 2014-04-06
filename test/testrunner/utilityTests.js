describe('Utility test suite', function (){
  describe('grab form by class, id, and as an element', function (){
    it('given an id I should get a form', function (){
      var form = document.createElement('form');
      form.classList.add('dummy');
      form.id = 'test';
      document.getElementById('mocha').appendChild(form);
      var grab = utility.getFormElement('#test');
      assert.equal(form.nodeType,grab.nodeType);
      assert.equal(grab.id, 'test');
    });
  });
});