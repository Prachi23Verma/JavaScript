const user={
  username:"Prachi",
  pricee: 563,

  welcomeMessage: function(){
    //   console.log(`${this.username}, wlcome to website`);
      console.log(this);
  }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this);


// function one(){
//     let username="Prachi"
//     console.log(this);
// }

// one()

// const one = function(){
//     let username = "Prachi"
//     console.log(this.username);
// }
const one = () => {
    let username = "Prachi"
    console.log(this);
}
// one()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => {return num1+num2}
// const addTwo = (num1,num2) => {user:"Prachi"}  provide error b/c object doesn't call like that
const addTwo = (num1,num2) => ({username :"Prachi"})

console.log(addTwo(4,5));


const myarr=[4,2,65,8,9]

console.log(myarr.forEach(() => []))