//-----------------------for-of------------------

// ['hey','jgy','gto']
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const i  of arr) {
    // console.log(i);
}
const name=["jay","roy","ramesh"]
for (const num of name) {
    // console.log(num);
}

const greeting ="Hellow world !"
for (const num2 of greeting) {
    // console.log(`Each char is ${num2}`);
}

const map = new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('UK',"United kindom")
map.set('US',"United state of America")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ' :- ',value);
}
const myObject ={
    game1:'NFE',
    game2: 'lodo',
    game3: 'chess'
}
// for (const [key,value] of myObject) {
    // console.log(key,' :- ',value);
// }

const myObject1 ={
    js :"javaScript",
    cpp :"C++",
    rb : "ruby",
    py : "Python"
}
for (const key in myObject1) {
//   console.log(`${key} is shortcut for ${myObject1[key]}`);
}

const prog =["Js","cpp","Python","java","swift","react"]
for (const key in prog) {
//    console.log(prog[key]);
}

// ***********for each *****************

const coding =["Js","cpp","java","Python"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach(element => {
//     console.log(element);
// });

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

const myCoding = [
    {
        language:"JavaScript",
        languageFileName:"JS"
    },
    {
        language:"Java",
        languageFileName:"J"
    },
    {
        language:"Pythom",
        languageFileName:"Py"
    },
]

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
    console.log(item.language);
})