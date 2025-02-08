class User {
   constructor(username){
    this.username = username;
   }

   logMe(){
    console.log(`Username: ${this.username}`);
    
   }

  static creatId(){
    return `123`
   }
}

const prasad = new User("prasad");
// console.log(prasad.creatId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email
    }
}

const laptop = new Teacher("Dell", "Dell@gmail.com")

laptop.logMe();
console.log(laptop.creatId());



