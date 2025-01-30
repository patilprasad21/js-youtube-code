const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.reduce( (acc,currval) => {return acc+currval } ,0 );

const newNums = nums.reduce(function (acc,ele){
    // console.log(`The acc is : ${acc} and currVal is : ${ele}`)
    return ele+acc
},0)
// console.log(newNums);


const shoppingCart = [
    {courseName : "Javascript",price: 299},
    {courseName : "Java",price: 399},
    {courseName : "Data Science",price: 2999},
]


const buyTotalCourse = shoppingCart.reduce( (acc, currval) =>  acc+currval.price , 0)
console.log(`The TotalPriceToPay is : ${buyTotalCourse}`)
console.log(buyTotalCourse)