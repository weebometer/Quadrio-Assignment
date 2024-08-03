const express = require('express');
const { createCar, getAllCars, updateCar, deleteCar, getDashboardStats } = require('../controllers/carController');
const { authenticateAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateAdmin, createCar);
router.get('/', getAllCars);
router.put('/:id', authenticateAdmin, updateCar);
router.delete('/:id', authenticateAdmin, deleteCar);
router.get('/dashboard/stats', authenticateAdmin, getDashboardStats);

module.exports = router;
