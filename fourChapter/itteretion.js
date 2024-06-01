//   for
for (let num = 0; num <= 10; num++) {
    const element = num;
    if (element === 5){
        //  console.log("5 is best number");
    }
    // console.log(element);
}

for (let i  = 0; i  <= 10; i ++) {
    // console.log(`Outer loop ${i}`);
   for (let j = 0; j <= 10; j++) {
    //   console.log(`inner loop ${j}`);
    // console.log(i+'*' +j +'=' + i*j);
    }  
}
let myarr =[ "Prachi","Devesh","Muskan","Heyyyy"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
}

// break continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5 ) {
//         console.log("Detected");
//         break
//     }
//     console.log(`value of i is ${index}`); 
// }
for (let index = 0; index <= 20; index++) {
    if (index == 5 ) {
        console.log("Detected");
        continue
    }
    console.log(`value of i is ${index}`); 
}