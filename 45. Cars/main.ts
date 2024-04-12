function create_car(manufacturer, model,...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    options.forEach(option => {
        let [key , value] = option.split(":");
        car [key.trim()] = value.trim(); 
    });

    return car;

  } 
  let my_car_details = create_car("Toyota","corolla", "color : Silver", "sunroof: True");
  console.log(my_car_details);
