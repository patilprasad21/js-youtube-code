// Immedietly Invoked Function Expressions (IIFE)

(function android(name,model){
    // named IIFE
    console.log(`latest model of ${name} is ${model}`)
})("Iphone","15ProMax");

// console.log(android("Iphone","15ProMax"));

((username)=>{
    //simple IIFE
    console.log(`the comapny emplyee user name - ${username}`)
})("Prasad");