const fans={
    name:"Hawals",
    since:1880,
    works:function rotate(){
        console.log(`${this.name} , This is best fan`)
        console.log(this)
    }
}

// fans.works()
// console.log(this);
fans.name="Bajaj";
// fans.works();

const walking=function(){
      let kiloMeter=30
      console.log(this);
}
// walking();

// const addTwo=(num1,num2)=>num1+num2;              .......1st way

// const addTwo=(num1,num2)=>{return num1+num2};     .........2nd way

// const addTwo=(num1,num2)=>(num1+num2);             ........3ed way

const addTwo=(num1,num2)=>({username:"Random"});  //  .........4th way

console.log(addTwo(1,2))