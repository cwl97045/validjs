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

