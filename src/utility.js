var utility = {
    bind : function (context, name) {
      return function () {
        return context[name].apply(context, arguments);
      };
    }
  };

