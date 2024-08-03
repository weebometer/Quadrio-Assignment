const Car = require('../models/Car');

exports.createCar = async (req, res) => {
    const { name, manufacturingYear, price } = req.body;
    const newCar = new Car({ name, manufacturingYear, price });
    await newCar.save();
    res.status(201).json(newCar);
};

exports.getAllCars = async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
};

exports.updateCar = async (req, res) => {
    const { id } = req.params;
    const { name, manufacturingYear, price } = req.body;
    const updatedCar = await Car.findByIdAndUpdate(id, { name, manufacturingYear, price }, { new: true });
    res.json(updatedCar);
};

exports.deleteCar = async (req, res) => {
    const { id } = req.params;
    await Car.findByIdAndDelete(id);
    res.status(204).end();
};

exports.getDashboardStats = async (req, res) => {
    const totalCars = await Car.countDocuments();
    res.json({ totalCars });
};
