// const coding =["Js","Python","cpp","java"]

// const value = coding.forEach((item)=>{ //foreach is non return type
//      console.log(item);
//      return item
// })

// console.log(value);

// const myNum =[1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num)=> num>4) //it is a return type 

// const newNum =[]
// myNum.forEach((num) => {        this help to make for each returnable
//     if (num > 4){                
//         newNum.push(num)
//     }
// })
// console.log(newNum);


// const books = [
//    { title:"one", genre:"fiction",publish:1981,eddition:2004 },
//    { title:"two", genre:"action",publish:1985,eddition:2001 },
//    { title:"three", genre:"drama",publish:1989,eddition:2003 },
//    { title:"four", genre:"sciense",publish:2000,eddition:2012 },
//    { title:"five", genre:"aronotical",publish:1955,eddition:2008 },
//    { title:"six", genre:"fiction",publish:2010,eddition:2014 },
//    { title:"seven", genre:"drama",publish:2009,eddition:2013 },
//    { title:"eight", genre:"fiction",publish:1998,eddition:2007 },
//    { title:"nine", genre:"action",publish:1998,eddition:2009 },
//    { title:"ten", genre:"sciense",publish:2005,eddition:2010 },
//    { title:"eleven", genre:"history",publish:2011,eddition:2014 },
//    { title:"twelv", genre:"sciense",publish:2015,eddition:2019 },
//    { title:"thirteen", genre:"eronotical",publish:2017,eddition:2020 },
   
// ]

// const userBooks = books.filter((bk) => bk.genre === "history" )
// const userBooks =books.filter((bk) => bk.publish >= 2000 && bk.genre === "history")
// console.log(userBooks);

const myNum =[1,2,3]

// const newNums = myNum.map((num) => num+10)
// console.log(newNums);


// ?********Chaining*************

// const newNum = myNum.map((num) => num*10).map((num) => num+1).filter((num) => num >= 40 && num%3===0)

// console.log(newNum);


// ************Reduce*******

// const myTotal = myNum.reduce(function (acc,curval){
//     console.log(`acc : ${acc}, curvalue: ${curval}`);
//     return acc + curval
// },0)


// const myTotal = myNum.reduce((acc, curval) => acc + curval , 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price :299
    },
    {
        itemName : "Java course",
        price :499
    },
    {
        itemName : "python course",
        price :399
    },
    {
        itemName : "cpp course",
        price :599
    },
]

const total = shoppingCart.reduce((acc , item) => acc + item.price , 0)
console.log(total);