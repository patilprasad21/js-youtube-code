const coding = ["Java", "Ruby", "Javascipt", "Swift", "Cpp", "Python"]

// const values = coding.forEach( (ele) =>{console.log(ele)});
// console.log(values);                         .....Got Undefined Value at End

const myNums = [1,2,3,4,5,6,7,8,9,10];


// const newNums=myNums.filter( (ele) => { return ele > 4 })
// console.log(newNums)

// by use of forEach
const newArr = [];
myNums.forEach( (num) => {
    if(num > 4){
        newArr.push(num);
    }
})
// console.log(newArr)
