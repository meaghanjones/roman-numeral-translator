// business logic
var romanNumeral = function(numeralInput) {
  var numeralInput = numeralInput.toUpperCase();
  var numeralsArray = numeralInput.split("");
  var answer = 0;

  if (/[abefghjknopqrstuwyz]/ig.test(numeralsArray)) {
    alert("Please enter a single word with no spaces");
  }

  else {
  for (var index = 0; index < numeralsArray.length; index++){
      var indexNumerals = numeralsArray[index];
      if (indexNumerals === "I"){
        numeralsArray[index] = '1';
      } else if (indexNumerals === "V"){
        numeralsArray[index] = '5';
      } else if (indexNumerals === "X"){
        numeralsArray[index] = '10';
      }  else if (indexNumerals === "L"){
        numeralsArray[index] = '50';
      } else if (indexNumerals === "C"){
        numeralsArray[index] = '100';
      } else if (indexNumerals === "D"){
        numeralsArray[index] = '500';
      } else if (indexNumerals === "M"){
        numeralsArray[index] = '1000';
      }
    }

    var answer = answer + parseInt(numeralsArray[numeralsArray.length-1]);
    if (parseInt(numeralsArray[numeralsArray.length-2]) >= parseInt(numeralsArray[numeralsArray.length-1])){
       var answer = answer + parseInt(numeralsArray[numeralsArray.length-2]);
    } else if (parseInt(numeralsArray[numeralsArray.length-2]) < parseInt(numeralsArray[numeralsArray.length-1])){
       var answer = answer - parseInt(numeralsArray[numeralsArray.length-2]);
    }
    if (parseInt(numeralsArray[numeralsArray.length-3]) >= parseInt(numeralsArray[numeralsArray.length-2])){
      var answer = answer + parseInt(numeralsArray[numeralsArray.length-3]);
    }
    else if (parseInt(numeralsArray[numeralsArray.length-3]) < parseInt(numeralsArray[numeralsArray.length-2])){
      var answer = answer - parseInt(numeralsArray[numeralsArray.length-3]);
    }
      if (parseInt(numeralsArray[numeralsArray.length-4]) >= parseInt(numeralsArray[numeralsArray.length-3])){
        var answer = answer + parseInt(numeralsArray[numeralsArray.length-4]);
    }
    else if (parseInt(numeralsArray[numeralsArray.length-4]) < parseInt(numeralsArray[numeralsArray.length-3])){
        var answer = answer - parseInt(numeralsArray[numeralsArray.length-4]);
    }
    if (parseInt(numeralsArray[numeralsArray.length-5]) >= parseInt(numeralsArray[numeralsArray.length-4])){
      var answer = answer + parseInt(numeralsArray[numeralsArray.length-5]);
    }

    else if (parseInt(numeralsArray[numeralsArray.length-5]) < parseInt(numeralsArray[numeralsArray.length-4])){
      var answer = answer - parseInt(numeralsArray[numeralsArray.length-5]);
    }
    return answer;
  }
}


//user interface logics
$(document).ready(function(){
  $("#button-submit").click(function(event){
    event.preventDefault();
    var numeralInput = $("input#numeral").val();
    var result = romanNumeral(numeralInput);
    $("#result").text(result);

    $("#result").show();
  });
});
