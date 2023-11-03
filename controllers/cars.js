const carModel=require('../models/cars')

// Require the Model
// a model by convention singular and upperCase
const CarModel = require('../models/cars')

module.exports = {
  index, // shortcut for below
  // index: index
  show,
  // show: show,
  // optionally
  new: newCar,
  create,
  delete: deleteCar,
};

function deleteCar(req, res) {
  CarModel.deleteOne(req.params.id);

  res.redirect("/cars");
}

function create(req, res) {
  console.log(req.body, " <- contents of the form!");

  // MODEL TAKE THE CONTENTS OF THE FORM AND PUT IT IN THE DATABASE
  const car = CarModel.create(req.body);
  // THEN RESPOND TO THE CLIENT

  // 1st response, and make sure the function is running
  // then write the model logic!
  res.redirect(`/cars/${car.id}`);
}

function newCar(req, res) {
  res.render("cars/new");
}

function show(req, res) {
  console.log(req.params, " <- req.params.id");
  const car = CarModel.getOne(req.params.id);
  res.render("cars/show", { car: car });
}

function index(req, res, next) {
  const carsFromTheDatabase = CarModel.getAll();
  res.render("cars/index.ejs", { cars: carsFromTheDatabase });
}

