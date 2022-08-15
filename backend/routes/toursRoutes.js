const express = require('express');
const router = express.Router();
const { getAllTours, getTour, createTour, updateTour, deleteTour } = require('../controllers/toursController');

router.use(express.json());

router.route('/')
  .get(getAllTours)
  .post(createTour);

router.route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;