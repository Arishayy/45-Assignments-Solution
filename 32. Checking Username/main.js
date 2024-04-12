var currentUsers = ["Mudassir", "Maryam", "Fatima", "Sania", "Manahil"];
var newUsers = ["Ayyan", "Fareena", "Mudassir", "Sania", "Zayn"];
newUsers.forEach(function (newOneUser) {
    var myCondition = currentUsers.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    if (myCondition) {
        console.log("Sorry ".concat(newOneUser, " is already taken!"));
    }
    else {
        console.log("This username ".concat(newOneUser, " is available"));
    }
});
