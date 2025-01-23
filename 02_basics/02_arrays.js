const tata_cars=["Nano","nexon","harrior"];
const marutiSuzuki_cars=["swift","baleno","Ertika"];
//push
tata_cars.push(marutiSuzuki_cars);
// console.log(tata_cars);
//concat method
let all_cars=tata_cars.concat(marutiSuzuki_cars);
// console.log(all_cars);
//spread opeartor
let all_new_cars=[...tata_cars,...marutiSuzuki_cars];
// console.log(all_new_cars);

const anotherArray=[1,2,3,[4,5,6,7,[34,54,21,23,4]],[21,23,5,7,[0,98,643,21435]]];
// console.log(anotherArray);
const realArray=anotherArray.flat(Infinity);
// console.log(realArray);

console.log(Array.isArray(["random"]));
console.log(Array.from("prasad"));
console.log(Array.from({name:"india"})); //interesting 

let score1=120;
let score2=300;
let score3=900;

console.log(Array.of(score1,score2,score3));
