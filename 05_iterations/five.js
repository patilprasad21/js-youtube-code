const coding = ["Java","Javascript","Ruby","Swift","Cpp"];

// coding.forEach( function (ele) {
//     console.log(ele)
// } )

//Arrow function

// coding.forEach( (ele) => console.log(ele))

// function printMe(val){
//     console.log(val)
// }

// coding.forEach(printMe);

// coding.forEach( (values, index, arr) => console.log(values, index, arr) )


let students = [
    { name: "John", age: 21, course: "Computer Science" },
    { name: "Sarah", age: 22, course: "Mechanical Engineering" },
    { name: "Mike", age: 20, course: "Electrical Engineering" },
    { name: "Emma", age: 23, course: "Civil Engineering" }
];

// students.forEach( (ele) => console.log(`name of student is ${ele.name} and his course name is ${ele.course}`))

console.log(`Mechanical course student name is ${students[1].name}`)