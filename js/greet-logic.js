function GreetF(){

  var personname = '' ;
  var greetName = '' ;


function Greet(names,language) {

    if (names != '') {
      personname=names;
  }
  if (language === 'Eng' ) {
        greetName = 'Hello, ' + names ;
      }

   if (language === 'Xho' ) {
      greetName= 'Molo, ' + names ;
      }
 if (language === 'Afri') {
    greetName = 'Halo, ' + names;
    }
}

//
function GetName() {
  return greetName;
}

return {
      Greet,
      GetName

}
}
