var utility = {
    bind : function (context, name) {
      return function () {
        return context[name].apply(context, arguments);
      };
    },
    getFormElement : function (formSelector) {
      var form, formArray =[], i;
      if(typeof formSelector === 'string'){
        var firstChar = formSelector.charAt(0);
        if (firstChar === '#') {
            form = document.getElementById(formSelector.slice(1));
        //Check if it's a class 
        } else {
        //Will return as a nodeList, convert into array and bounce out
          form = document.getElementsByClassName(formSelector.slice(1));
          for(i = 0 ; i < form.length; i++){
            formArray.push(form.item(i));
          }
        }
      //Selector is an element
      } else {
        if (formSelector.nodeType === 1) {
          form = formSelector;
        }
      }
      //if formArray and it's first spot are not undefined return the array
      if(formArray && formArray[0]){
        return formArray;
      } else {
        return form;
      }
    },

  };

var generics = {
  genericMessageDisplay : function () {
    var span = document.getElementById('err');
    if (!this.valid) { 
      span.textContent = this.errorMes;
    } else {
      span.textContent = ''; 
    }
  },

  genericStyleChange : function () {
    if(this.valid){
      this.elm.style.border='';  
    } else {
      this.elm.style.border='1px solid red';
    }
  },

  genericValidFun : function () {
     if (this.elm.value.length > 0) {
       this.valid = true;  
     } else {
       this.valid = false;
     }
    // this.changeStyle();
     //this.displayMessage();
  },

  genericCheckField : function (){
    var inputs = this.inputs;
    var invalidField = false;
    for(var i = 0; i < inputs.length; i++){
      if(!inputs[i].valid){
        invalidField = true;
      }
    }
    return invalidField;  
  }

};var validate = (function (){
    var validObj = function (elm) {
      this.elm = elm;  
      this.valid = false;
     // this.errorMes = "This field is invalid";  
      this.validateFn = generics.genericValidFun;
      this.changeStyle = generics.genericStyleChange;
      this.keyup = function(){       
        this.elm.addEventListener('keydown', utility.bind(this, 'validateFn'));             
      };
      //this.displayMessage = generics.genericMessageDisplay;
    };
    var init = function (validateFn, valid,elm, customStyle){
      return new validate.validObj(validateFn, valid,elm, customStyle);
    };
    
    return {
        validObj : validObj,
        init : init
    };
})();
//Developer can create a form using a class selector, html element, or id. Jquery style. # and . 



var form = function (inputArray) {
  return this.prototype.init(inputArray);
};

form.prototype = {
    /*init function should use the selected element, deal with a collection of elements, use and id or class to find an object find button 
    Take inputs from form, wrap them as validation objects and add them to the form object. Also check for a submit button*/
  init : function (formSelector) {
    var inputs = [], subButton, form, formChildren, i, j, elm;
    //Need to get the form from the document
    form = utility.getFormElement(formSelector);
    //From the form I need its children
    //Might need to check if form is an array, if array do everything for ever form in nodeList or html collection
    //each child must become a validation object
    //if form is an array, do the process through each of the form elements and there children
    //need to filter out an input type submit or button with 'valid' class
  //  if (form && form[0]) {
   //   for (j = 0; j < form.length; j++) {

   //   }
   // } else {
      formChildren = form.children;
      var validationElm;
      for (i = 0; i < formChildren.length; i++) {
        elm = formChildren[i];
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
      for(var prop in e){
        console.log(prop);
      }
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