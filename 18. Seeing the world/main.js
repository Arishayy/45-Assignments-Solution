var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making orignal array
var countriestovisit = ["Canada", "Palestine", "Belgium", "Austria"];
console.log("Orignal Order:", countriestovisit);
//modifying array list
console.log("Alphabetical Order:", __spreadArray([], countriestovisit, true).sort());
//showing that array is still in original order
console.log("Still in original order:", countriestovisit);
//printing in reverse order
console.log("Reverse Order:", __spreadArray([], countriestovisit, true).reverse());
//showing that the array is still in same condition
console.log("Still in original order:", countriestovisit);
//changing order in original array
console.log("Reversed Original Array:", countriestovisit.reverse());
//printing to show that its back to original order
console.log("Back to original order:", countriestovisit.reverse());
//print the array to show that it is been changed in alphabetical order
console.log("Sorting in alphabetical order:", countriestovisit.sort());
//changed original array into reversed again
console.log("Reversed Original Array:", countriestovisit.reverse());
