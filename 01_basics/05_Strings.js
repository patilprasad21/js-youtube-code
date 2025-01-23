const Name="prasad";
const repoCount=10;
console.log(typeof(Name));
// console.log(Name + repoCount + " value");
console.log(`My name is ${Name.toUpperCase()} and repoScre is ${repoCount}`)

//another way to declare string 

const marvelCha= new String("Iron-Man-Tony");
console.log(marvelCha);
console.log(marvelCha[1]);
console.log(marvelCha.__proto__);


// console.log(marvelCha.length);
// console.log(marvelCha.toUpperCase());
console.log(marvelCha.charAt(3));
console.log(marvelCha.indexOf('M'));

let newStr=marvelCha.substring(0,4)
console.log(newStr);

const anotherStr=marvelCha.slice(-8,6)   // Not Understand
console.log(anotherStr);

const stringNewOne="     Prasad     "
console.log(stringNewOne);
console.log(stringNewOne.trim());

const android="one plus - 32 gb";
console.log(android.replace(32,64));

const colorsName="Green,Yellow,White,Black"
console.log(colorsName.split(','));

const arr=[1,2,3,4]
arr.splice(1,0,"prasad");
console.log(arr);