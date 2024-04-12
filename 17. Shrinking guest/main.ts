let guestList = ["Mudassir","Fatima","Maryam","Sania","Manahil"];
let guestwhoarenotComing = guestList[0];
console.log(guestwhoarenotComing, "I cant join");
guestList.splice(0, 1, "Zayd");
console.log("YAY! I HAVE FOUND A BIGGER TABLE FOR DINNER");
guestList.unshift("Fareena");
guestList.push("Ayyan");
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Rayma");
console.log("Updated List Of Guest");
guestList.forEach(oneguest => console.log(`Hello ${oneguest}, Would you like to have dinner with me?`));
console.log("Unfortunately, The new dinner table wont arrive at the time, so i can only invite two guest for dinner");
while(guestList.length > 2){
    let removedguest = guestList.pop();
    console.log(`Hello! ${removedguest} I'm sorry but i can't invite you for dinner now`);
}
console.log("Invitation to Last 2 Guest");
guestList.forEach(lasttwoguest => console.log(` Surprisingly ${lasttwoguest}, You're still invited at the dinner party!`));
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
