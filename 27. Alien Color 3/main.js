//defining var
var alienColor = "Green";
//using if else statement
//1st ver
if (alienColor === "Green") {
    console.log("(VERSION 1) You shot down green alien you have earned 5 points");
}
else if (alienColor === "Yellow") {
    console.log("You shot down yellow alien you have earned 10 points");
}
else if (alienColor === "red") {
    console.log("You shot down red alien you have earned 15 points");
}
//2nd ver
var alien_Color2 = "yellow";
if (alien_Color2 === "green") {
    console.log("You shot down green alien you have earned 5 points");
}
else if (alien_Color2 === "yellow") {
    console.log("(VERSION 2) You shot down yellow alien you have earned 10 points");
}
else if (alien_Color2 === "red") {
    console.log("You shot down red alien you have earned 15 points");
}
//3rd ver
var alien_Color3 = "red";
if (alien_Color3 === "green") {
    console.log("You shot down green alien you have earned 5 points");
}
else if (alien_Color3 === "yellow") {
    console.log("You shot down yellow alien you have earned 10 points");
}
else if (alien_Color3 === "red") {
    console.log("(VERSION 3) You shot down red alien you have earned 15 points");
}
