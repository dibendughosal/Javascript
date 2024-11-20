let myName = "Dibendu Ghosal"
console.log(myName.toUpperCase())

function generator(x, y, z){
    num = Math.floor(Math.random()*3);
    if (num ==0) {
        return x;
    }
    else if (num == 1) {
        return y;
    }
    else{
        return z;
    }
}
console.log("Generated Name is " + generator("Crazy","Amazing","Fire")+" Shop name "+ generator("Engine","Food","Garment") + "another word" +  generator("Bros","Limited","Hub"))