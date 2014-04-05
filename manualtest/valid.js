var utility = {
    bind : function (context, name) {
      return function () {
        return context[name].apply(context, arguments);
      };
    },
    getFormElement : function (formSelector) {
      var form,firstChar = formSelector.charAt(0);
      //Check if it's an ID
      if(firstChar === '#'){
        form = document.getElementById(formSelector.slice(1));
        console.log(form);
      //Check if it's a class
      } else if (firstChar === '.'){
        form = document.getElementByClassName(formSelector.slice(1));
      //Selector is an element
      } else {
        if(formSelector.nodeType === 1){
          form = formSelector;
        }
      }
      console.log(form);
      return form;
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
     if (this.elm.value) {
       this.valid = true;  
     } else {
       this.valid = false;
     }
     this.changeStyle();
     this.displayMessage();
  },

};
var validate = (function (){
    var validObj = function (validateFn, valid, elm, customStyle, customValid, errMes) {
      this.elm = elm;  
      this.valid = valid;
      this.errorMes = errMes || "This field is invalid";  
      this.validateFn =  customValid || generics.genericValidFun;
      this.changeStyle = customStyle || generics.genericStyleChange;
      this.keyup = function(validObj, funcName){
        this.elm.addEventListener('keyup', utility.bind(validObj, funcName));             
      };
      this.displayMessage = generics.genericMessageDisplay;
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
      var inputs = [], subButton, form,firstChar,formChildren;
      //Need to get the form from the document
      console.log(formSelector);
      form = utility.getFormElement(formSelector);
      //From the form I need its children
      formChildren = form.children;
      console.log(formChildren);
      //each child must become a validation object






       /* var inputs = [], subButton;
        for(var i = 0; i < inputArray.length; i++){
            var elm = inputArray[i];
            if(elm.tagName === 'INPUT'){
                //If they're using input[type="submit"]
                if(elm.type === 'submit'){
                  subButton = elm;
                } else {
                  inputs.push(elm);
                }
            }
            if(elm.tagName === 'BUTTON' && elm.className === 'validSubmit'){
              subButton = elm;
            }
                 
        }
        return this.formObj(inputs, subButton);
        */

        
    },
    formObj : function(input, button){
      this.inputs = input;
      this.subButton = button;
    }
};

