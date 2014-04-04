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
