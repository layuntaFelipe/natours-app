const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server side!',
    app: 'Natours'
  });
});

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
