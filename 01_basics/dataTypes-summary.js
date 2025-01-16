// Datatypes Details

//#Primitive Datatypes
// 7 types : String, Number, Bigint, Boolean, null, undefined, Symbol

const num=123;
const num1=123.3;
const boolean=true;
const str="Prasad";
const empty=null;
const name=undefined;
const Bigint=3657823826839246836548n;
// console.log(Bigint);
const id=Symbol('123');
// console.log("The type of Symbol is : ",typeof(id));//Symbol


// #referance (Non Primitive) DataTypes

// Arrays, Objects, Functions

const cars=["Hyundai","Maruti","MG Hector","TaTa"];

const carDetails={
    Hyundai_i20:{
          Engine:1500+"HP",color:"Red",GroundClr:21+"MM",length:300+"CM"
    }
}
carDetails.Hyundai_i20.GroundClr = 400+"MM";
// console.log(carDetails);


const addNum=function(num1,num2){
     let res=num1+num2;
    return res;
}
// console.log(addNum(1,2));
// console.log(typeof(cars));
// console.log(typeof(carDetails));
// console.log(typeof(addNum));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory(Primitive) , Heap Memory(Non Primitive)

let Num=1234;
let Num1=num;
Num1="OneTwoThreeFour";
// console.log(Num);
// console.log(Num1);
//copy of varible created in primitive datatypes
if(num===Num1){
    console.log("True : Referance Created");
}else{
    console.log("false : Copy Created");
}
let isroStelite={
    name:"Gaganyaon",
    costOfMake:234567890+"Million $",
    Design:"AeroDynamic"
}
let indiaSat=isroStelite;
// console.table(isroStelite);
indiaSat.WithCountry="Russia"
// console.table(isroStelite);
// console.table(indiaSat);
if(isroStelite === indiaSat){
    console.log("True : Reference created")
}



