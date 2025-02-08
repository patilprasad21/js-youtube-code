function setUserName(userName){
    // complex DB calls
    this.userName = userName;
    console.log("called");
}

function createUser(userName, email, password){
    setUserName.call(this, userName);

    this.email = email;
    this.password = password;
}

const chai = new createUser("Prasad", "chai@gmail.com", 1234);

console.log(chai);
