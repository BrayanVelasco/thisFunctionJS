function add(c, d){
    return this.a + this.b + c + d;
  }
  
  var o = {a:1, b:3};
  
 
// The first parameter is the object to use as 'this', subsequent parameters are passed as arguments
  // in the call to the function
  console.log(add.call(o, 5, 7)); // 1 + 3 + 5 + 7 = 16
  
  
// The first parameter is the object to use as 'this''this', the second is a matrix whose elements
  // are used as arguments in the call to the function
  add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34


//EXample 2

var name = "Global Name"

var greet = function (msg){
    this.msg =msg ||"WithoutLN"

    console.log(`Hi ${this.msg} ${this.name}`)
}

var person1 = {
    name :"Brian",
    lastName:"Velasco"
}

greet.call(person1, "Boy") //this is the person object

greet.apply(person1,["Boy"])



///BIND

person2 = {
    name:"Nathalia"
}
var gt = greet.bind(person2, "GIRL")
gt()



