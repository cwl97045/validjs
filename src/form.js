//Developer can create a form using a class selector, html element, or id. Jquery style. # and . 



var form = function (inputArray) {
  return this.prototype.init(inputArray);
};

form.prototype = {
    /*init function should use the selected element, deal with a collection of elements, use and id or class to find an object find button 
    Take inputs from form, wrap them as validation objects and add them to the form object. Also check for a submit button*/
  init : function (formSelector) {
    var inputs = [], subButton, form, formChildren, i, j, elm, validationElm;
    form = utility.getFormElement(formSelector);
    //From the form I need its children
    //Might need to check if form is an array, if array do everything for ever form in nodeList or html collection
    //each child must become a validation object
    //if form is an array, do the process through each of the form elements and there children
    //need to filter out an input type submit or button with 'valid' class
   
      formChildren = form.children;
      for (i = 0; i < formChildren.length; i++) {
        elm = formChildren[i];
        //All class name things should be constants that can be easily changed!
        if(elm.tagName === 'INPUT' && elm.className === 'validate'){
          validationElm = new validate.init(elm);
          validationElm.keyup();
          inputs.push(validationElm);
        }
        if((elm.tagName === 'BUTTON' && elm.className ==='validateSubmit') || (elm.tagName === 'INPUT' && elm.type === 'submit')){
          subButton  = elm; 
        }
      }
    
      return new this.formObj(inputs, subButton);   
  },
  formObj : function (input, button) {
    /* TODOs : 
      1.Write tests for creating 
      2.Make this better!
      3.Everythingh "works" but needs to be editable by the end user. Work on that.
    */
    this.inputs = input;
    this.subButton = button;
    this.success = function () {
      console.log('All fields valid');
    };
    this.fail = function() {
      console.log('Some fields are invalid');
    };
    this.evalFunc = function (e){ 
      e.preventDefault();
      var allValid = true, inputs = this.inputs;
      for(var i = 0; i < inputs.length; i++){
        if(!inputs[i].valid){
          allValid = false;
        }
      }
      if(allValid){
        this.success();
      } else {
        this.fail();
      }  
    };    
    this.clickSub = function (){
      this.subButton.addEventListener('click', utility.bind(this , 'evalFunc'));
    };
  }
};