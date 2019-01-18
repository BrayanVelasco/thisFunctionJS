const outerThis = this;
const fun = () =>{
    console.log(outerThis === this)
}

const fn = function(){
    console.log(outerThis === this) //false
}
fun()
fn()