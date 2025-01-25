//Arrow function
let sqRoot=num=>Math.sqrt(num);
console.log(sqRoot(25));
//Normal function
function colorID(color){
    if(color===1){
        return "Best Color use it";
    }else{
        return "Check Another Color";
    }
}
// console.log(colorID(1));

function userLoggin(username ='sam'){
    if(!username){
        return "Please Enter Username";
    }
    return `${username} just loggin`;
}
// console.log(userLoggin("Prasad"));

//rest or Spread operator

function returning(val1,val2,...num1){
    return num1
}
// console.log(returning(100,200,3456,234,457,5))

const user={
    name:"Ram",
    prices:199
}

function handleObject(anyobject){
    return `The user name is ${anyobject.name} and price is ${anyobject.prices}`
}
// console.log(handleObject(user));
// console.log(handleObject({
    // name:"Sham",
    // prices:900
// }))

const myArr=[1,2,3,4,6];
function handlearray(arr){
    return arr[2];
}
// console.log(handlearray([342,54,42,5]));

