let userNames = ["Mudassir","Maryam","Fatima","Admin","Sania"];

userNames = []

if(userNames.length === 0){
console.log("The array is empty we need to find some users!")
}else{
        userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, thankyou for logging in again.`)
        }
 })
}