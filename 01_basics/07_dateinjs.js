// console.log("Below is date and time concept");

let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let myCreateDate=new Date(2025,3,4,7,40);
// console.log(myCreateDate.toLocaleString());

let myStamp=Date.now();
// console.log(myStamp);
// console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));
