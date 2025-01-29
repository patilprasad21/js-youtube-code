// if

if(123){
    console.log("This is if statement")
}

// <, >, <=, >=, ==, !=, ===, !==

if(2 != 2 ){
    console.log("E1");
}else if(2 !== '2'){
    console.log("E2");
}

const score=100;

if(score>10){
    let userName="Rahul";
    // console.log(`The user name is :${userName} and his score is :${score}`)
}
// console.log(`Outer : ${userName}`)

const balance = 1000;
// implicit scope
// if(balance>100) console.log("test executed"),console.log("test 2 executed")  // .........Not recommanded

// person temp check

function checkPatientTemp(tempInC,tempInF){
       if(tempInC == 37 || tempInF == 98.6){
        return `patient Normal Temperature`;
       }else if(tempInC == 36.1 || tempInF == 97){
        return `patient Normal Ranges`;
       }else{
        return `Patient requires hospitalization`;
       }
}
// console.log(checkPatientTemp(364,423))

