const express = require('express');
const router = express.Router();
const getCatFact = require('../services/catService');

router.get('/', async (req, res) => {
  try {
    const fact = await getCatFact();

    res.status(200).json({
      status: "success",
      user: {
        email: "solomonoluwatobi307@gmail.com",
        name: "Solomon Precious",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(), // UTC ISO format
      fact: fact
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch data"
    });
  }
});

module.exports = router;
