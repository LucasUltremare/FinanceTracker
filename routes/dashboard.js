// routes/dashboard.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  res.redirect('/login');
}

router.get('/', isAuthenticated, async (req, res) => {
  try {
    // Carrega as informações do usuário logado
    const user = await User.findById(req.session.userId);
    res.render('dashboard', { title: 'Dashboard', user });
  } catch (err) {
    console.error(err);
    res.redirect('/login');
  }
});

module.exports = router;
