'use strict';
//
//Within a function, the value of this depends on how the function is called.

function Person (name, lastName){
    this.name = name
    this.lastName = lastName

}
//let person = Person("Brian","Velasco");
let person = new Person("Brian","Velasco");
console.log(person) //undefined and error use strict 

//In strict mode, the value of this is maintained in what is established when entering the execution context


