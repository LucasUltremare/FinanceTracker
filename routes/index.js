// routes/index.js
const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');            // Rota da homepage
const authRoutes = require('./auth');            // Rotas de login, logout, registro
const dashboardRoutes = require('./dashboard');  // Rota da dashboard
const transactionsRoutes = require('./transactions'); // Outras rotas, se houver

router.use('/', homeRoutes);
router.use('/', authRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/transactions', transactionsRoutes);

module.exports = router;
