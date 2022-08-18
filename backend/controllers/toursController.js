const fs = require('fs');
const path = require('path');
const asyncHandler = require('express-async-handler');
const Tour = require('../models/tourModel');

const tours = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'dev-data', 'data', 'tours-simple.json')));

const checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`)

  if(+req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    })
  }
  next();
};

const checkBody = asyncHandler(async(req, res, next) => {
  if(!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    })
  }

  next();
}) 

const getAllTours = asyncHandler(async(req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours
    }
  })
});

const getTour = asyncHandler(async(req, res) => {
  const tour = tours.find(el => el.id === +req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  })
}); 

const createTour = asyncHandler(async(req, res) => {
  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({
  //   id: newId
  // }, req.body);

  // tours.push(newTour);

  // fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
  //   res.status(201).json({
  //     status: 'success',
  //     data: {
  //       tours: newTour
  //     }
  //   })
  // })

  const { name, rating, price } = req.body;

  // Validation
  if (!name || !price) {
    res.status(400);
    throw new Error('Please include all fields necessary');
  }

  // Find if tour already exists
  const tourExists = await Tour.findOne({name});

  if(tourExists) {
    res.status(400);
    throw new Error('Tour already exists');
  }

  // Create tour
  const tour = await Tour.create({
    name,
    rating,
    price
  })

  if(tour) {
    res.status(201).json({
      _id: tour._id,
      name: tour.name,
      rating: tour.rating,
      price: tour.price
    })
  } else {
    res.status(400);
    throw new Error('Invalid Tour data');
  }
});

const updateTour = asyncHandler(async(req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: "<Updated tour here>"
    }
  });
});

const deleteTour = asyncHandler(async(req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody
}