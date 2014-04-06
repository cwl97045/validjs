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
      form = utility.getFormElement(formSelector);
      //From the form I need its children
      //Might need to check if form is an array, if array do everything for ever form in array.
      formChildren = form.children;
      //each child must become a validation object
      for(var i = 0; i < formChildren.length; i++){
        var elm = formChildren[i];

      }






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