var o = {
    prop: 37,
    f: function() {
      return this.prop;
    }
  };
  
  console.log(o.f());

  //this is linked to o object


  const person = {
      firstName :"Brian",
      sayHi(){
          console.log(`Hi my name is ${this.firstName}`) //this is liked person object

      }
  }

  person.sayHi()

  const greet = person.sayHi.bind(person) //context person
  greet()