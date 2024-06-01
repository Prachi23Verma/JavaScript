
// const myarr =[0,1,2,3,5,8,4,5]
// console.log(myarr[2] == "2")

// const myhero =["thor","lokky","steev","tonny","hulk"]

// const myarr2=new Array(1,2,3,4,5)
// console.log(myarr2[3]);

// myarr.push(8)
// myarr.push(7)
// myarr.pop(1)
// console.log(myarr);

// myarr.unshift(9)
//  myarr.shift(3)
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(typeof myarr.includes(9));
// console.log(myarr.indexOf(5));

// const newarr = myarr.join()
// console.log(myarr);
// console.log(newarr);
// console.log(typeof newarr);


// ------- slicing------------
// It does not change the original array

// console.log("A ", myarr);

// const myarr3 = myarr.slice(1,3)
// console.log(myarr3);

// console.log("B ", myarr);

//------splice------------- 
// It cut the particular part from the original array 

// const myarr4 = myarr.splice(1,3)
// console.log(myarr4);

// console.log("C ",myarr);

// const marvelheros=["Thor","IronMan","Hulk","SpiderMan"]
// const DC=["RajuRock","BatMan","Flash","SuperrMan"]

// marvelheros.push(DC)

// console.log(marvelheros);
// console.log(marvelheros[4]);

// const all=marvelheros.concat(DC)
// console.log(all);

// const all=[...marvelheros,...DC]
// console.log(all);

// const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realArr =arr.flat(Infinity)
// console.log(arr);


console.log(Array.isArray("PRACHI"));
console.log(Array.from("PRACHI"));
// console.log(Array.from(name:"Prachi")); it gives empti array it is interesting

let score=100
let score2=200
let score3=300
console.log(Array.of(score,score2,score3));

