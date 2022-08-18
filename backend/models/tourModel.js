const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
},
{
  timestamp: true,
});

module.exports = mongoose.model('Tour', tourSchema);