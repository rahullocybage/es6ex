var add =function(a,b){
    this.a = a,
    this.b = b,
    this.addi = function() {
    console.log(this);
    
    setTimeout(() =>{
        console.log(this.a+this.b);
    },3000);
}
}
var sub =function(a,b){
    this.a = a,
    this.b = b,
    this.subs = function() {
    console.log(this);
    
    setTimeout(() =>{
        console.log(this.a-this.b);
    },3000);
}
}

let add1 = new add(54,34);
let subs = new sub(54,34);
add1.addi();
subs.subs();
