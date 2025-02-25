// routes/home.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Finance Tracker - Home' });
});

module.exports = router;
