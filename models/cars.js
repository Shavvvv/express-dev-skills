const cars = [
	{id: 209, car: 'Honda' },
	{id: 543, car: 'Lexus' },
	{id: 102, car: 'Brabus'},
    {id: 331, car: 'Mazda'},
    {id: 678, car: 'Toyota'},
    {id: 960, car: 'Fiat'},
    {id: 414, car: 'Ford'}
  ];


   
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };

  function update(id, carUpdate) {
    const idx = cars.findIndex((car) => car.id === parseInt(id));
    let car = cars[idx];
    car = {
      ...car,
    };
  }

  function deleteOne(id) {
    // Find the index based on the id of the car object
    const idx = cars.findIndex((car) => car.id === parseInt(id));
    cars.splice(idx, 1);
  }

  function create(car) {
    // Add the id
    car.id = Date.now() % 1000000;
    
    car.done = false;
    cars.push(car);
    return car;
  }

  function getAll() {
    return cars;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return cars.find((car) => car.id === parseInt(id));
  }



 