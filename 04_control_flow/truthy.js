// const userEmail="patil@gmail.com";
// const userEmail="";
const userEmail=[];

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Not have user Email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NAN

//truthy values

//"0", 'false', " ", [], {}, function(){}


if(userEmail.length === 0){
    console.log("Array is Empty")
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}


// Nullish coalescing Operator (??) : null undefined

let val1;
// val1=10 ?? 209;
// val1 = null ?? 100;
// val1 = undefined ?? 120;
val1 = null ?? 200 ?? 300

console.log(val1);

// Terniary operator

// condition ? true : false

const carValue = 999;

carValue >= 1000 ? console.log("Affordable") : console.log("Not Affordable")