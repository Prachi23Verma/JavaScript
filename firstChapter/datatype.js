// "use strict"; // treat all js code as newer version

// // alert(3+3)   we are using node jas not browser it provide error

// let myname="Prachi" //string
// let age=19 //int
// let isgoogleIn=false;   //boolean

// // number   bigint  string  boolean  null  undefined  symbol   object  
// // console.log(typeof myname);
// // console.log(typeof null); //object
// // console.log(typeof undefined); //undefined

// const score=55;
// const scoreValue=55.6
// const isLoggedIn = true
// const outsideTemp = 88
// let userEmail
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
// const bigNumber = 74123333333336985247885n


// const heros =["hulk","thor","stive","tony"]

// let myObj = {
//     name: "Prachi",
//     age: 19,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }


// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);


//js is dynamically typed language

//data types in js is categorized according  how data can be stored and accesed 
// basically it has tow types:-
// primitive(7) =  string , number, boolean, null ,undefined, symbol, bigInt (call by value)
// nonprimitive = array, objects, functions (call by reference)


// ------------------------------- string----------------------------------------


const name = "Prachi Verma";
const repoCount = 50
// console.log(name + repoCount + "  Value");  outdated way
// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `); //It is morden techhnique to add mor string in one


const gameName = new String('Prachi-game');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('g'));

const newOne = gameName.substring(0,6)
// console.log(newOne);

const anotherString = gameName.slice(-8,5)

// console.log(anotherString);

const  newTwo = "       Prachi        "
// console.log(newTwo);
// console.log(newTwo.trim());

const url = "https://hitesh.com/hithesh%20chocolaty"
console.log(url.replace('%20','-'))
console.log(url.includes('prachi'));


console.log(gameName.split('-'));