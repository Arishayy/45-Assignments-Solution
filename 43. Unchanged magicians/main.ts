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


//making a copy of an above array
let copy_magicians_names = magicians_name.slice()

//calling make_great function in copyed array
 let copy_great_magicians = make_great(copy_magicians_names);

 //showing array in original and copy form

 //original form
 console.log("\n\t Original Array\n");
 show_magician(magicians_name);

 //copied form
 console.log("\n\t Copied Array\n")
 show_magician(copy_great_magicians);
