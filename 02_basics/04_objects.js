// const instaUser=new Object()  singlton object
const instaUser={}

instaUser.id="android123"
instaUser.name="pritam"
instaUser.isLoggin=false

// console.log(instaUser);

const regularUser={
     emmail:"some@gamil.com",
     fullName:{
        userFullName:{
            firstName:"Prasad",
            lastName:"patil"
        }
     }
}
console.log(regularUser.fullName.userFullName.firstName);

let obj1={1:"one",2:"Two"}
let obj2={3:"Three",4:"Four"}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

// console.log(obj3);

const arr=[
    {
        id:1,
        email:"ransom@gamil.com"
    },
    {
        id:1,
        email:"ransom@gamil.com"
    }
]
// console.log(arr[0].email);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggin'));

const laptopNames={
    name1:"HP",
    name2:"Lenova",
    name3:"Dell",
    name4:"MacBook"
}
laptopNames.name2
const {name4:c1}=laptopNames;
console.log(c1);

