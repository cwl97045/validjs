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
     if (this.elm.value) {
       this.valid = true;  
     } else {
       this.valid = false;
     }
     this.changeStyle();
     this.displayMessage();
  },

};var validate = (function (){
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
      for (i = 0; i < formChildren.length; i++) {
        elm = formChildren[i];
        if(elm.tagName === 'INPUT' && elm.className === 'validate'){
          var validationElm = new validate.init(null, false, elm, null);
          inputs.push(validationElm);
        }
        if((elm.tagName === 'BUTTON' && elm.className ==='validateSubmit') || (elm.tagName === 'INPUT' && elm.type === 'submit')){
          subButton  = elm; 
        }
      }
      return new this.formObj(inputs, subButton);   

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
  formObj : function (input, button) {
    this.inputs = input;
    this.subButton = button;
  }
};