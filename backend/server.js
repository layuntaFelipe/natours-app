const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})

app.use('/api/v1/tours', require('./routes/toursRoutes'));
app.use('/api/v1/users', require('./routes/usersRoutes'));


app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
