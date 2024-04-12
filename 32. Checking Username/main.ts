let currentUsers = ["Mudassir","Maryam","Fatima","Sania","Manahil"]

let newUsers = ["Ayyan","Fareena","Mudassir","Sania","Zayn"]

newUsers.forEach(newOneUser => {
    let myCondition =currentUsers.some(currentOneUser => currentOneUser.toLowerCase()=== newOneUser.toLowerCase())
    if(myCondition){
        console.log(`Sorry ${newOneUser} is already taken!`)
    }else{
        console.log(`This username ${newOneUser} is available`)
    }

})

    

    
    


