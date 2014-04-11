window.onload = function (){

  //End user shouldn't have to use call method or initilize the submission button. FIX THIS.	
  var loginForm = form.call(form,'#myForm');
  loginForm.clickSub();
  loginForm.success = function (){
    console.log('Success is mine');
  };
  loginForm.fail = function (){
    console.log('I\'ve overridden failure');
  };

  var newForm = form.call(form, '#newForm');
  newForm.clickSub();

};
  