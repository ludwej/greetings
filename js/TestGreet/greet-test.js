describe('Greeting', function(){
  it('should greet Lihle in Xhosa', function(){
    var factoryF = GreetF()

    factoryF.greetFunction("Lihle",'Xho');
    assert.equal(factoryF.greetFunction('Molo, Lihle'))
    });

    it('should greet Lihle in English', function(){
      var factoryF = GreetF()

      factoryF.greetFunction("Lihle",'Eng');
      assert.equal(factoryF.greetFunction('Hi, Lihle'))
      });
      it('should greet Lihle in Afrikaans', function(){
        var factoryF = GreetF()

        factoryF.greetFunction("Lihle",'Eng');
        assert.equal(factoryF.greetFunction('Halo, Lihle'))
        });


      it('should count how many people greeted', function(){
        var factoryF = GreetF()

        factoryF.greetFunction("Lihle",'Afri');
        factoryF.greetFunction("Ludwe",'Xho');
        factoryF.greetFunction("Aphiwe",'Eng');

        assert.equal(factoryF.countLocal() , 3 )
        });

        it('count same person but in Upper and Lowercase', function(){
          var factoryF = GreetF()

          factoryF.greetFunction("Ludwe",'Afri');
          factoryF.greetFunction("ludwe",'Afri');
          factoryF.greetFunction("LUDWE",'Afri');


          assert.equal(factoryF.countLocal() , 1 )
        });



        it('it shouldnt count when no one has been greeted', function(){
          var factoryF = GreetF()

          factoryF.greetFunction("",'');
          factoryF.greetFunction("",'');
          factoryF.greetFunction("",'');


          assert.equal(factoryF.countLocal() ,0 )
        });



});
