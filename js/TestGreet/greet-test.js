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



      it('should count how many people greeted', function(){
        var factoryF = GreetF()

        factoryF.greetFunction("Lihle",'Afri');
        factoryF.greetFunction("Ludwe",'Xho');
        factoryF.greetFunction("Aphiwe",'Eng');

        assert.equal(factoryF.countLocal() , 3 )
        });

        it('count same person but in different Cases', function(){
          var factoryF = GreetF()

          factoryF.greetFunction("Ludwe",'Afri');
          factoryF.greetFunction("ludwe",'Afri');
          factoryF.greetFunction("Ludwe",'Afri');


          assert.equal(factoryF.countLocal() , 1 )
        });
        it('it should count different people', function(){
          var factoryF = GreetF()

          factoryF.greetFunction("Ludwe",'Afri');
          factoryF.greetFunction("Ayanda",'Xho');
          factoryF.greetFunction("Ayabongf",'Eng');


          assert.equal(factoryF.countLocal() , 3 )
        });
        it('it should count different people', function(){
          var factoryF = GreetF()

          factoryF.greetFunction("Ludwe",'Afri');
          factoryF.greetFunction("Ayanda",'Xho');
          factoryF.greetFunction("Ayabongf",'Eng');


          assert.equal(factoryF.countLocal() , 3 )
        });



});
