let guestList = ["Mudassir","Fatima","Maryam","Sania","Manahil" ];

let guesswhoarenotcoming = guestList[4];

console.log(guesswhoarenotcoming, "Can't join for dinner");

guestList.splice(4, 2, "Zayd");

guestList.forEach(guestwhoarecoming => console.log(`Hello ${guestwhoarecoming}, Would you like to have a Dinner with me?`));
