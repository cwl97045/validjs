/*Should have a base formula that takes in the custom validation, display and style change functions so they can be easily changed but, still executed in the order they need to be executed in*/
var utility = {
    bind : function (context, name) {
      return function () {
        return context[name].apply(context, arguments);
      };
    }
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

