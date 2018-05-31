function GreetF(storedNames) {

  var stored = storedNames || {} ;
  var nameGreeted = ''
//  var getLocal = JSON.parse(localStorage.getItem('stored'));

  function greetFunction(language,name) {

    if(name != ''){
      nameGreeted = name
      if (stored[nameGreeted]=== undefined) {
        stored[nameGreeted] = 0;

      //  localStorage.setItem('stored',JSON.stringify({}));
      }

    }

    if (language === 'Eng' ) {
          return 'Hello, ' + name ;
        }

     if (language === 'Xho' ) {
        return 'Molo, ' + name ;
        }
    if (language === 'Afri') {
      return 'Halo, ' + name;
      }

  }


  function countLocal() {

      return  Object.keys(stored).length ;

  }


  function returnNamesLocal() {
    return stored;

  }


return {
  greetFunction,
  countLocal,
  returnNamesLocal
}
}
