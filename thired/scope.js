// let a=130
// const b=800
// var c=591

// if (true) {
//     let a=100
//     const b=200
//     var c=411  
//     console.log(a,b,c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    username="Prachi"
    function two(){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}

// one()


if (true) {
    const username = "Prachi"
    if (username === "Prachi") {
        const website = "youtube"
        // console.log(username+" " + website);        
    }
    // console.log(website);
}
// console.log(username);


//********************interesting************************** */

console.log(addOne(5))
function addOne(num){
  return num+1
}


// addTwo(5) it get error 
const addTwo = function(num){
    return num+2
}

addTwo(5)