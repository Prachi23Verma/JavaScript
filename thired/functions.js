

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("F");
    console.log("G");
    console.log("k");
    console.log("A");
    console.log("       ");
}

// sayMyName()


// function add(number1, number2){ //parameters
//       console.log(number1+number2)
// }

// function add(number1, number2){ //parameters
//    let result = number1+number2
//    return result
// }
function add(number1, number2){ //parameters
  return number1+number2
}
const result = add(4,5) //arguments
// console.log(result);

function loginMessage(username = "Sam"){
    if(!username){
        console.log("Please enter the user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginMessage("Prachi"))
// console.log(loginMessage())


function calculateCartPrice(...num1){
        return num1
}
// console.log(calculateCartPrice(522,1004,7855));

// const user ={
//     username : "Prachi",
//     price : 155
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"Prachi",
    price:123
})

const mynewArr =[120,55,268,1456]

function returnArr(getArr){
    return getArr[1]
}
// console.log(returnArr(mynewArr));
console.log(returnArr([459,536,120,462]));