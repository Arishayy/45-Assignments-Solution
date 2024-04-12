//function with a rest parameter
function make_sandwich(...items: string[]){
    console.log("\n Lets Make a Sandwich with following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\n Sandwich is ready!! Now Take a bite and enjoy!! \n");

}

//calling function 3 times with diff arguments 
make_sandwich("Bread","Chicken", "Cheese", "Cucumber", "Barbecue sauce","Mayo","Egg");

make_sandwich("Bread", "Mayo", "Seasoned Vegetable" );

make_sandwich("Bread","Chicken spread");