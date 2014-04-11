var generics = {
  genericMessageDisplay : function () {
    var span = document.getElementById('err');
    if (!this.valid) { 
      span.textContent = this.errorMes;
    } else {
      span.textContent = ''; 
    }
  },

  genericStyleChange : function () {
    if(this.valid){
      this.elm.style.border='';  
    } else {
      this.elm.style.border='1px solid red';
    }
  },

  genericValidFun : function () {
     if (this.elm.value.length > 0) {
       this.valid = true;  
     } else {
       this.valid = false;
     }
     this.changeStyle();
     //this.displayMessage();
  },

  genericCheckField : function (){
    var inputs = this.inputs;
    var invalidField = false;
    for(var i = 0; i < inputs.length; i++){
      if(!inputs[i].valid){
        invalidField = true;
      }
    }
    return invalidField;  
  }

};