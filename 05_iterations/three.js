

// for of
let obj = {name1:"Prasad",name2:"Rahul",name3:"Samarth"}

for (const values of Object.values(obj)) {
    // console.log(values);
}

const myArr="Hello Javascript";

for (const element of myArr) {
    // console.log(`The elemnts are : ${element}`)
}

// Map

const map = new Map()

map.set("CE","Computer Engginering")
map.set("AE","Automobile Engginering")
map.set("ETC","Electronic And Telecommunication Engginering")
map.set("CE","Computer Engginering")

// console.log(map);

for (const [key,values] of map) {
    console.log(key, ':-' ,values);
}