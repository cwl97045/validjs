var validate = (function (){
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
