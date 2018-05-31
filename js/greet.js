 var text = document.querySelector ('.Text');
 var language = document.querySelector ('.language');
 var GreetBtn = document.querySelector ('.GreetBtn');
 var ResetBtn = document.querySelector ('.Reset');
 var output = document.querySelector ('.output');
 var peopleCount = document.querySelector('.peopleCount');


var storedLocal = JSON.parse(localStorage.getItem('stored'));


var factoryF = GreetF(storedLocal) ;

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
      localStorage.setItem('stored',JSON.stringify(factoryF.returnNamesLocal()))


    }
    if (name === '') {
      return output.innerHTML = 'PLEASE ENTER YOU NAMER ' ;

    }
    if (!language) {
        return output.innerHTML = 'PLEASE CHECK LANGUAGE ' ;

    }
}
GreetBtn.addEventListener('click', clickBtn);



function clearBtn() {
  localStorage.removeItem('stored');
  output.innerHTML ='' ;


}
ResetBtn.addEventListener('click', clearBtn);
