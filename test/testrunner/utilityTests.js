describe('Utility test suite', function (){
  describe('grab form by class, id, and as an element', function (){
    beforeEach(function (){
      var form = document.createElement('form');
      form.classList.add('dummy');
      form.id = 'test';
      document.getElementById('mocha').appendChild(form);
    });
    afterEach(function (){
       var element = document.getElementById('test');
       element.parentNode.removeChild(element);
    });
    it('given an id I should get a form', function (){
      var grab = utility.getFormElement('#test');
      assert.equal(1,grab.nodeType);
      assert.equal(grab.id, 'test');
      assert.equal(grab.className, 'dummy');
    });
    it('given a class, should return a form', function (){
      var grab = utility.getFormElement('.dummy');
      assert.equal(1, grab[0].nodeType);
      assert.equal('test', grab[0].id);
      assert.equal('dummy', grab[0].className);
    });
    it('given a form element it will return it', function(){
      var form = document.createElement('form');
      form.classList.add('this');
      var newForm = utility.getFormElement(form);
      assert.equal(newForm.nodeType, form.nodeType);
      assert.equal('this', newForm.className);

    });

  });
});