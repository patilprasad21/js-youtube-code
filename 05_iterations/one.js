for(let i=1;i<=10;i++){
    // console.log(i);
    if(i == 5){
        // console.log("5 is best number")
    }
    // console.log(i);

}

for(let i=1;i<=10;i++){
    // console.log(`Outer Loop : ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inner Loop : ${j} and Outer Loop : ${i}`)
        // console.log(i + " * " + j + " = " + (i*j));
    }

}

const myArr = ["Iron-Man","Thore","Howkay"];
// console.log(myArr.length);
for(i=0;i<myArr.length;i++){
    // console.log(myArr[i]);
}


//  break and continue

// for(i=1;i<=10;i++){
//     if(i == 5){
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(i)
// }


for(i=1;i<=10;i++){
    if(i == 5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(i)
}