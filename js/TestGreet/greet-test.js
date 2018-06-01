describe('Greeting', function(){
  it('should greet Lihle in Xhosa', function(){
    var factoryF = GreetF()

    factoryF.greetFunction("Lihle",'Xho');
    assert.equal(factoryF.greetFunction('Molo, Lihle'))
    });

    it('should greet Lihle in Xhosa', function(){
      var factoryF = GreetF()

      factoryF.greetFunction("Lihle",'Eng');
      assert.equal(factoryF.greetFunction('Molo, Lihle'))
      });



      it('should greet Lihle in Xhosa', function(){
        var factoryF = GreetF()

        factoryF.greetFunction("Lihle",'Afri');
        assert.equal(factoryF.greetFunction('Halo, Lihle'))
        });
});
