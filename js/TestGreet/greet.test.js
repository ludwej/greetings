
describe('Greetings', function(){

  it('it should greeet ludwe in Xhosa ', function(){

    var greetLudwe = GreetF();

    greetLudwe.Greet("Ludwe", 'Xho');
    assert.equal(greetLudwe.GetName(),'Molo, Ludwe');
    });

    it('it should greeet ludwe in English ', function(){

      var greetLudwe = GreetF();

      greetLudwe.Greet("Ludwe", 'Eng');
      assert.equal(greetLudwe.GetName(),'Hello, Ludwe');
      });


      it('it should greeet ludwe in Afrikaans ', function(){

        var greetLudwe = GreetF();

        greetLudwe.Greet("Ludwe", 'Afri');
        assert.equal(greetLudwe.GetName(),'Halo, Ludwe');
        });

  });
