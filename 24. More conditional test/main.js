//making variables
var grapes = "grapes";
var uppercaseGrapes = "GRAPES";
var three = 3;
var twenty = 20;
var subjects = ["english", "urdu", "maths"];
//equality & unequality test with strings
console.log("Is grapes is a fruit?");
console.log(grapes == "grapes");
console.log("\nIs grapes is not green in color?");
console.log(grapes != "grapes");
//using lower case fuction
console.log("\nIs GRAPES are still called grapes after converting to lowercase?");
console.log(uppercaseGrapes.toLowerCase() == "grapes");
console.log("\nIs grapes are not called yhe grapes after converting to lowercase?");
console.log(uppercaseGrapes.toLowerCase() != "grapes");
//numerical testing
console.log("\n Is 3 time is equal to twenty");
console.log(three == twenty);
console.log("\n Is 3 is not equal to twenty?");
console.log(three != twenty);
//greater than and less than
console.log("\n Is 3 is smaller than twenty?");
console.log(three < twenty);
console.log("\n Is twenty is greater than 3?");
console.log(twenty < 10);
//greater than or equal to
console.log("\n Is twenty is greater than or equal to 5?");
console.log(twenty >= 5);
//less than or equals to
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
//using and & or operator
//using && 
console.log("\n twenty is not equals to 3 and twenty is greater than 3");
console.log(twenty != 3 && twenty > 3);
console.log("\n twenty is not equals to 3 and twenty is greater than 3");
console.log(twenty != 3 && twenty > 30);
//using ||
console.log("\n twenty is greater than 30 OR twenty is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 30 OR twenty is not equal to 20");
console.log(20 > 50 || 20 !== 20);
//test if the item is in array
console.log("\nIs math is included in my subjects array?");
console.log(subjects.includes("maths"));
console.log("\nIs math is not included in my subjects array?");
console.log(!subjects.includes("maths"));
