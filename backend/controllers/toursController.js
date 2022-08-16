const fs = require('fs');
const path = require('path');

const tours = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'dev-data', 'data', 'tours-simple.json')));

const getAllTours = (req, res) => {
 res.status(200).json({
   status: 'success',
   requestedAt: req.requestTime,
   results: tours.length,
   data: {
     tours
   }
 })
};

const getTour = (req, res) => {
 const id = +req.params.id;
 if(id > tours.length) {
   return res.status(404).json({status: 'failed', message: 'invalid id'});
 }

 const tour = tours.find(el => el.id === id);

 res.status(200).json({
   status: 'success',
   data: {
     tour
   }
 })
};

const createTour = (req, res) => {
 const newId = tours[tours.length - 1].id + 1;
 const newTour = Object.assign({
   id: newId
 }, req.body);

 tours.push(newTour);

 fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
   res.status(201).json({
     status: 'success',
     data: {
       tours: newTour
     }
   })
 })
};

const updateTour = (req, res) => {
 const id = +req.params.id;
 if(id > tours.length) {
   return res.status(404).json({status: 'failed', message: 'invalid id'});
 }

 res.status(200).json({
   status: 'success',
   data: {
     tour: "<Updated tour here>"
   }
 });
};

const deleteTour = (req, res) => {
 const id = +req.params.id;
 if(id > tours.length) {
   return res.status(404).json({status: 'failed', message: 'invalid id'});
 }

 res.status(204).json({
   status: 'success',
   data: null,
 });
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour
}