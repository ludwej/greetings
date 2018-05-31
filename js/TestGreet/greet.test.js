
describe('Greetings', function(){

  it('it should greeet ludwe in Xhosa ', function(){

      var factoryF = GreetF()

    factoryF.greetFunction("Ludwe", 'Xho');
    assert.equal(factoryF.nameGreeted(),'Molo, Ludwe');
    });



      it('it should greeet ludwe in Afrikaans ', function(){

        var factoryF = GreetF();

        factoryF.Greet("Ludwe", 'Afri');
        assert.equal(factoryF.GetName(),'Halo, Ludwe');
        });

  });
