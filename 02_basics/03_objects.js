// singleton 
// object.create

//object literals

const mySm=Symbol("random");

const jsUser={
    name:"Prasad",
    "full Name":"Prasad Patil",
    [mySm]:"newKey",
    email:"prasad@google.com",
    age:26,
    location:"pune",
    isLoggin:false,
    lastLogginDays:["Monday","Friday"]
}
// console.log(jsUser.age);
// console.log(jsUser['isLoggin']);
jsUser.name='rahul';
// console.log(jsUser);
// console.log(jsUser['full Name']);
// console.log(typeof jsUser[mySm]);
// Object.freeze(jsUser);


jsUser.greeting=function(){
    console.log("This is function inside object")
}

jsUser.greetingTwo=function(){
    console.log(`Hello js user ,${this["full Name"]}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())