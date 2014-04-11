/*Should have a base formula that takes in the custom validation, display and style change functions so they can be easily changed but, still executed in the order they need to be executed in*/

/*Rip out to utility.js
var utility = {
    bind : function (context, name) {
      return function () {
        return context[name].apply(context, arguments);
      };
    }
  };
*/



/*rip out to genericFunc.js*/
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

/*KEEP HERE

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
})();*/


/*Test to make sure valid*/
var validfun = function (){
    if(this.elm.value){
      this.valid = true;
    } else {
      this.valid = false;
    }
    this.changeStyle();
};

var newStyle = function (){
    if(this.valid){
      this.elm.style.border='';
    } else{
      this.elm.style.border='5px solid black';
    }
    
};

var newElm = document.getElementById('grabMe');

var newValid = new validate.init(validfun, false, newElm, newStyle);

newValid.keyup(newValid, "validateFn");


/*for(var prop in newValid.elm){
  console.log(prop);
}*/



var form = function (inputArray) {

  return this.init(inputArray);
};

form.prototype = {
    init : function (inputArray) {
        var inputs = [], subButton;
        console.log(inputArray);
        for(var i = 0; i < inputArray.length; i++){
            var elm = inputArray[i];
            if(elm.tagName === 'INPUT'){
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
        
    },
    formObj : function(input, button){
      this.inputs = input;
      this.subButton = button;
    }
};




var forms = document.getElementsByClassName('valid');
/*for(var prop in form.item(0)){
  console.log(prop);
}*/
var formChildren = forms.item(0).children;
var formInputArray = []; 

for(var i = 0; i < formChildren.length; i++){
    var elm = formChildren.item(i);
    if(elm.tagName === 'INPUT' || elm.tagName === 'BUTTON' ){
      formInputArray.push(elm);
    }
}
var cooForm = new form(formInputArray);
console.log(cooForm);
