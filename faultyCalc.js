// Faulty Calculator
if(Math.random()<0.1){
    function sum(a, b) {
        return a - b;
    }
    function sub(a, b) {
        return a / b;
    }
    function div(a, b) {
        return a ** b;
    }
    function multip(a, b) {
        return a + b;
    }
    
}
else{
    function sum(a, b) {
        return a + b;
    }
    function sub(a, b) {
        return a - b;
    }
    function div(a, b) {
        return a / b;
    }
    function multip(a, b) {
        return a * b;
    }
}
let c = sum(4, 35);
let d = sub(44, 35);
let e = div(44, 35);
let f = multip(44, 35);
console.log("Sum + : ",c)
console.log("subtract - : ",d)
console.log("Division / : ",e)
console.log("Multipication * : ",f)