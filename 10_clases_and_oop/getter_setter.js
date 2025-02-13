class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
     this._email = value;
    }

    get password(){
        return `${this._password}random`
    }

    set password(value){
        this._password = value;
    }
}

const prasad = new User("pprahul@google.com", "abc")
console.log(prasad.password);
console.log(prasad.email);


