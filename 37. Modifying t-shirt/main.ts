// making function
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)

}
//calling a function by default message
make_shirt();

//calling a function again but for medium size
make_shirt("Medium")

//calling a function for small size and different print
make_shirt("Small","I Love TheStrangerThings")