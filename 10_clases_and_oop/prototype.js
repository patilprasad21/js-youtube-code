// let myName = "Prasad";
// let myFullName = "Prasad Sanjay Patil   ";
// console.log(myName.length);
// console.log(myFullName.length);

let myCars = ["Tata", "Hyundai","Mahindra"];

let carDetails = {
    Tata:"Tata Nexon",
    Hyundai:"Hyundai i20 Asta",
    Mahindra:"Mahindra XUV700",

    getHyundaiPrice:function(){
        console.log(`The Showroom price of ${this.Hyundai} is 12LPA`);
        
    }
}



// console.log(carDetails.getHyundaiPrice())

Object.prototype.prasad = function(){
    console.log(`prasad is present in all objects`)
}


// carDetails.prasad();
// myCars.prasad();

// inheritance

let companyDetails = {
   name:"TCS",
   location:"Bengluru" 
}

let manager = {
    isAvailable:false
}

let seniorDev = {
    isAvailable:true
}

let intern = {
    makeAssignment:"JS project",
    isFullTime:false,
    __proto__:seniorDev
}

manager.__proto__ = companyDetails;

//modern syntax

Object.setPrototypeOf(seniorDev, manager);

let anotherUserName = "Junior JS Dev        ";

String.prototype.truLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.truLength();

"prasad".truLength();