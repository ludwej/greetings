function GreetF(){

  var personname = '' ;
  // var greetName = '' ;
  var greetCounter= 0 ;



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
function countName() {
 //Object.keys(greetCounter).length;
  return  greetCounter++;

}



//
function GetName() {
  return greetName;
}

return {
      GreetF,
      Greet,
      GetName,
      countName
}
}
var factoryF= GreetF()
