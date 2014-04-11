var validate = (function (){
    var validObj = function (elm) {
      this.elm = elm;  
      this.valid = false;
      this.invalidMes = 'This is invalid!'; 
      this.validateFn = generics.genericValidFun;
      this.changeStyle = generics.genericStyleChange;
      //Not doing exactly what I want it to do.
      this.keyup = function(){       
        this.elm.addEventListener('keydown', utility.bind(this, 'validateFn'));
        this.elm.addEventListener('keyup', utility.bind(this, 'validateFn'));             
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
