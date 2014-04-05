//Developer can create a form using a class selector, html element, or id. Jquery style. # and . 



var form = function (inputArray) {
  return this.init(inputArray);
};

form.prototype = {
    //init function should use the selected element, deal with a collection of elements, use and id or class to find an object
    init : function (inputArray) {
        var inputs = [], subButton;
        console.log(inputArray);
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
        
    },
    formObj : function(input, button){
      this.inputs = input;
      this.subButton = button;
    }
};