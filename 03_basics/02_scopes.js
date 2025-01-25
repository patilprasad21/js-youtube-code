let a=10;
const b=20;
// var c=30;

if(Infinity){
  let a=50;
  const b=90;
//   console.log(a);
//   var c=100;
}
// console.log(a);
// console.log(b);
// console.log(c);

//++++++++++++++++   Nested Scopes +++++++++++++++++++++++++++++++
// clousers
function one(){
  let userName="EVcar";
  function two(){
    let modelName="TataNexon"
    console.log(userName);      
    }
    // console.log(modelName)
    two();
}
// one();

if(true){
  const laptopModel="Dell"
  if(100){
    const laptopColor=" - Red"
    // console.log(laptopModel.concat(laptopColor))
  }
  // console.log(laptopColor);

}
// console.log(laptopModel);

// +++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

// Normal function
console.log(addOne(4));
function addOne(num){
  return num+1;
}
//function Expressions
// console.log(addTwo(9));   ....Error
const addTwo=function(num){
  return num+ 2;
}
console.log(addTwo(9));
