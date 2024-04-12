// defining function 
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//array of magicians name
var magicians_name = ["chriss angel", "dynamo", "derren brown"];
var great_magicians = make_great(magicians_name);
show_magician(great_magicians);
