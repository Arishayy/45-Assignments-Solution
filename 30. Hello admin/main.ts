let userNames =["Mudassir","Maryam","Fatima","Admin","Sania"];

//using ForEach loop
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thankyou for logging in again.`)
    }
})