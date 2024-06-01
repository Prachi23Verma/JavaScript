//stack memory (primitiive)
// heap memory ( non Primitive)


let myYoutubeName ="PrachiVermaDotCom"
let anotherName=myYoutubeName
anotherName="HarryCodedotcom"
console.log(myYoutubeName);
console.log(anotherName);


let userOne ={
    email:"user@google.com",
    upi:"user@upi",
}
let userTow = userOne;
userTow.email = "Prachi@google.com"
console.log(userOne.email);
console.log(userTow.email);