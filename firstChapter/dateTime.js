//Dates

// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toJSON());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof mydate);


// let mycreatedDate =new Date(2003, 0, 23) // 0 -jan it start with 0
// console.log(mycreatedDate.toDateString());
// let mydateDate =new Date(2003-1-23) // starts from 1 it is not an indian formate
// console.log(mycreatedDate.toDateString());
// let anotherDate =new Date("23-01-2003") // starts from 1 and it is indian formate
// console.log(mycreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getFullYear());

// console.log(typeof `${newDate.getDate()}`);

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate);