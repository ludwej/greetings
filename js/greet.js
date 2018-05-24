 var text = document.querySelector ('.Text');
 var language = document.querySelector ('.language');
 var GreetBtn = document.querySelector ('.GreetBtn');
 var ResetBtn = document.querySelector ('.ResetBtn');
 var output = document.querySelector ('.output');


var factoryF = GreetF();

function dom(pName) {
  var checkLanguage = document.querySelector("input[name=languageType]:checked");
    if (checkLanguage) {
    var  names=text.value;
    var language= checkLanguage.value;
    factoryF.Greet(names,language);
    output.innerHTML = factoryF.GetName();

    }
}
GreetBtn.addEventListener('click', dom);
