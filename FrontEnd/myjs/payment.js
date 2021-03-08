
    $(document).ready(function(){  

      var checkField;

      //checking the length of the value of message and assigning to a variable(checkField) on load
      checkField = $("#fname,#addr,#city,#code,#coun,#cname,#cnum,#month,#year,#cvv").val().length;  

      var enableDisableButton = function(){         
        if(checkField > 0){
          $('#down').removeAttr("disabled");
        } 
        else {
          $('#down').attr("disabled","disabled");
        }
      }        

      //calling enableDisableButton() function on load
      enableDisableButton();            

      $('#fname,#addr,#city,#code,#coun,#cname,#cnum,#month,#year,#cvv').keyup(function(){ 
        //checking the length of the value of message and assigning to the variable(checkField) on keyup
        checkField = $("#fname,#addr,#city,#code,#coun,#cname,#cnum,#month,#year,#cvv").val().length;
        //calling enableDisableButton() function on keyup
        enableDisableButton();
      });

      
    });
     

    