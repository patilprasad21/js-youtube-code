const obj = {
    name1:"Prasad",
    name2:"Rahule",
    name3:"Samarth"
}


// for of 
for (const values of Object.values(obj)) {
    // console.log(values)
}

// for in 

for (const values in obj) {
    // console.log(obj[values])
}


const programming = ["java","Javascript","ruby","Swift"];

for (const keys in programming) {
    // console.log(programming[keys])
}

const map = new Map()                 // ......................On Map Not iterations

map.set('NY',"New York")
map.set('MH',"Maharastra")
map.set('Del',"Delhi")

// console.log(map);

for (const keys in map) {
//    console.log(keys)              ..........Not Iterations
}