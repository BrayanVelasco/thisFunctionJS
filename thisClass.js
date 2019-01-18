

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    sayHi(){
        console.log(`Hi, my name is ${this.firstName}`)
    }

    sayBye = () => console.log(`Bye ${this.firstName}`);
}

let person = new Person("Brian","Velasco")

person.sayHi();

let bye = person.sayBye
bye()