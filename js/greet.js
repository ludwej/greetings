 var text = document.querySelector ('.Text');
 var language = document.querySelector ('.language');
 var GreetBtn = document.querySelector ('.GreetBtn');
 var ResetBtn = document.querySelector ('.Reset');
 var output = document.querySelector ('.output');
 var peopleCount = document.querySelector('.peopleCount');

 var factoryF = GreetF() ;

function clickBtn() {
    var name = text.value ;
    var checkedRBTN = document.querySelector("input[name='languageType']:checked");

    if (checkedRBTN){
      var language = checkedRBTN.value;
     var dispayText = '' ;
      var displayOutput = factoryF.greetFunction(language,name);
      var displayCounter = factoryF.countLocal();

      //textB.innerHTML = '' ;
      output.innerHTML = displayOutput ;
      peopleCount.innerHTML = displayCounter ;
      console.log(factoryF.returnNamesLocal())

    }
    else {
      output.innerHTML =  '' ;
      peopleCount.innerHTML =  '';
    }
}


GreetBtn.addEventListener('click', clickBtn);
