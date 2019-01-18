//Global context 
//In the context of global execution outside any function, this refers to the global object


console.log(this === module.exports) //ture

//console.log(this.document === document); // true

console.log(this === window); // true //navegator

this.a = 37;
console.log(window.a); // 37