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
      //Check if it's a class
      } else if (firstChar === '.'){
        form = document.getElementByClassName(formSelector.slice(1));
      //Selector is an element
      } else {
        if(formSelector.nodeType === 1){
          form = formSelector;
        }
      }
      return form;
    },

  };

