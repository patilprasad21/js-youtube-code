const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map((ele) => {return ele+1})

// chaining 

const newNums = myNums
                .map( (num) => num*2)
                .map( (num) => num+1)
                .filter( (num) => num>=10) 
console.log(newNums);