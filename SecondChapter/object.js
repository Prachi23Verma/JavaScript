//singleton

//object literals

// const mysymbol = Symbol("key1")


// const user={
//     name:"Prachi",
//     "full name":"Prachi verma",
//     [mysymbol]:"mykey1",
//     age:20,
//     course:"B.Tech",
//     isLockedIn:true,
//     lastLockedInDays :["Monday","saturday"]

// }

// console.log(user.course); // it is not good practice
// console.log(user['course']);
// console.log(user["full name"]);
// console.log(user[mysymbol]);

// user.age=21
// Object.freeze(user) // use to make unchanged object 
// user.name="Sachi verma"
// console.log(user["name"]);

// user.greeting = function(){
//     console.log("Hello js user");
// }
// user.greeting2 = function(){
//     console.log(`Hello js user, ${this.name}`);
// }

// console.log(user.greeting());
// // console.log(user.greeting); it is not right provide error
// console.log(user.greeting2());




// const tinderUser=new Object() singleton object
const tinderUser={}  //non singleton object
tinderUser.Id ="123abc"
tinderUser.name ="Devesh"
tinderUser.isLockedIn =false
// console.log(tinderUser);



const regularUser ={
    email:"devesh@gmail.com",
    fullName:{
        UserFullname:{
            firstName:"Devesh",
            middleName:"Kumar",
            lastname:"Verma"
        },
        Fathersname:"Ashok verma",
        MotherName:"Pushpa verma"
    },
    Id:"5588Heros",
    fev:"Movie"
}

// console.log(regularUser.fullName.UserFullname.firstName);

const obj1={ 1:"Prachi",2:"verma",}
const obj2={3:"school",4:"Sycle"}
const obj4={5:"hello",6:"Fight"}

// const obj3={obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const user =[
    {
        id:2,
        email : "hjdhjd@google.com",
    },
    {
        id:5,
        email:"hu.com",
    },
    {
        id:2,
        email : "hjdhjd@google.com",
    },
    {
        id:5,
        email:"hu.com",
    },

]

user[0].email
// // console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLockedIn'));
// console.log(tinderUser.hasOwnProperty('isLocked'));

