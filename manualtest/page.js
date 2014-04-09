window.onload = function (){
  var loginForm = form.call(form,'#myForm');
  loginForm.clickSub();
  loginForm.success = function (){
    console.log('Hello, world');
  };
  loginForm.fail = function (){
    console.log('I\'ve overridden failure');
  };

  var newForm = form.call(form, '#newForm');
  newForm.clickSub();
  
};
  