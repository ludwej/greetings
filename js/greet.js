 var text = document.querySelector ('.Text');
 var language = document.querySelector ('.language');
 var GreetBtn = document.querySelector ('.GreetBtn');
 var ResetBtn = document.querySelector ('.Reset');
 var output = document.querySelector ('.output');
 var peopleCount = document.querySelector('.peopleCount');
 var storage = localStorage.getItem('stored');


var storedLocal = storage ? JSON.parse(storage) : {};
peopleCount.innerHTML = Object.keys(storedLocal).length;

var factoryF = GreetF(storedLocal) ;

function clickBtn() {
    var name = text.value.toUpperCase() ;



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
      localStorage.setItem('stored', JSON.stringify(factoryF.returnNamesLocal()))


    }
    if (name === '') {
       output.innerHTML = 'PLEASE ENTER YOUR NAME ' ;

       output.innerHTML = "<span style='color: red;'>PLEASE ENTER NAME</span>" ;

    }
    if (!language) {
        output.innerHTML = "<span style='color: red;'>PLEASE SELECT LANGUAGE</span>";

    }
}
GreetBtn.addEventListener('click', clickBtn);



function clearBtn() {
  localStorage.removeItem('stored');
  output.innerHTML ='' ;
  location.reload()
  localStorage.clear()


}
ResetBtn.addEventListener('click', clearBtn);



function functionName() {

}

window.addEventListener
