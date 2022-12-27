var add =function(a,b){
    this.a = a,
    this.b = b,
    this.addi = function() {
    console.log(this);
    
    setTimeout(function() {
        console.log(this.a+this.b);
    },3000);
}
}

let add1 = new add(34,54);
add1.addi();
//     addition :function() {

//         return "The addition of "+this.a+" and "+this.b+" is "+(this.a +this.b);
//     }
// };
// console.log(add.addition());