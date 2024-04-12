"use strict";
//creating an array
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["chriss angel", "dynamo", "derren brown"];
show_magicians(magician);
