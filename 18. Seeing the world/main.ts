//making orignal array
let countriestovisit: string [] =  ["Canada", "Palestine", "Belgium","Austria" ];
console.log("Orignal Order:", countriestovisit);
//modifying array list
console.log("Alphabetical Order:", [...countriestovisit].sort());
//showing that array is still in original order
console.log("Still in original order:", countriestovisit);
//printing in reverse order
console.log("Reverse Order:", [...countriestovisit].reverse());
//showing that the array is still in same condition
console.log("Still in original order:", countriestovisit);
//changing order in original array
console.log("Reversed Original Array:", countriestovisit.reverse());
//printing to show that its back to original order
console.log("Back to original order:", countriestovisit.reverse());
//print the array to show that it is been changed in alphabetical order
console.log("Sorting in alphabetical order:", countriestovisit.sort())
//changed original array into reversed again
console.log("Reversed Original Array:", countriestovisit.reverse());
