const user = {
    username: "prasad",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username : ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();  - constructor function 
// const Date = new Date();   - constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }
    
    
    return this;  // Optional 
}

const userOne = new User("prasad", 13, true);
const userTwo = new User("Rahul", 10, false);
console.log(userOne)
console.log(userOne.constructor);
// console.log(userTwo);

// step1 new keyword = empty object created
// step2 constructor function calls 
// step3 arguments inject into this keyword
// step4 get values

// instanceOF method