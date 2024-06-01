// if statement 

// const isuserLockedIn = true
// if (condition) {   
// }
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
/*false value  = false , 0, -0, bigInt, 0n, null ,"" , undefined, NaN */
/* truth value  = true, "0", 'false , "  " , [], {},function(){}  */

 const userEmail =[]
if (userEmail.length ===0) {
    // console.log("array is empty");
}
const emptyObj ={}

if (Object.keys(emptyObj).length === 0) {    
    // console.log("Object is empty");
}
/*  nulish coalescing operator (??) L: null , undefined */

let val;
val = 5 ?? 10
val = null ?? 10
val = undefined ?? 15
val = null ?? 50 ?? 20

console.log(val);

// Terniary Opretor

// condition ? true : false

const ice =100
ice <=80 ? console.log("Les then 80"): console.log("more than 80");

