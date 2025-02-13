const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);


const TV = {
   name : "samsung",
   price: 123456,
   isAvailable : true,

   orderTV: function(){
     log("TV OntheWay");
   }

}

// console.log(Object.getOwnPropertyDescriptor(TV, "name"));


Object.defineProperty(TV, "name", {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(TV, "name"));


for (let [key, value] of Object.entries(TV)) {
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`)
}