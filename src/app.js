const express = require('express');
const cors = require('cors');
const meRoute = require('./routes/me');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/me', meRoute);

app.get('/', (req, res) => {
  res.json({ message: 'Backend Wizard API Running 🚀' });
});

module.exports = app;
