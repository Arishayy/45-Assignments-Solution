// defining function 
function show_magician(magicians: string[]) {
    magicians.forEach(name => console.log(name) );
}

function make_great(magicians: string[]){
     return magicians.map(name => `The Great ${name}`);
}

//array of magicians name
let magicians_name = ["chriss angel","dynamo","derren brown"];

//calling function
 let great_magicians = make_great(magicians_name);

show_magician(great_magicians);

