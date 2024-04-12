var guestList = ["Mudassir", "Fatima", "Maryam", "Sania", "Manahil"];
var guesswhoarenotcoming = guestList[4];
console.log(guesswhoarenotcoming, "Can't join for dinner");
guestList.splice(4, 2, "Zayd");
guestList.forEach(function (guestwhoarecoming) { return console.log("Hello ".concat(guestwhoarecoming, ", Would you like to have a Dinner with me?")); });
