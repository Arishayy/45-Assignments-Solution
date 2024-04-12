//function with a rest parameter
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Lets Make a Sandwich with following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Sandwich is ready!! Now Take a bite and enjoy!! \n");
}
//calling function 3 times with diff arguments 
make_sandwich("Bread", "Chicken", "Cheese", "Cucumber", "Barbecue sauce", "Mayo", "Egg");
make_sandwich("Bread", "Mayo", "Seasoned Vegetable");
make_sandwich("Bread", "Chicken spread");
