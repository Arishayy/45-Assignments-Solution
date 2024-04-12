// defining function 
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//array of magicians name
var magicians_name = ["chriss angel", "dynamo", "derren brown"];
//calling function
var great_magicians = make_great(magicians_name);
//making a copy of an above array
var copy_magicians_names = magicians_name.slice();
//calling make_great function in copyed array
var copy_great_magicians = make_great(copy_magicians_names);
//showing array in original and copy form
//original form
console.log("\n\t Original Array\n");
show_magician(magicians_name);
//copied form
console.log("\n\t Copied Array\n");
show_magician(copy_great_magicians);
