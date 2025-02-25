// routes.js
const express = require('express');
const router = express.Router();

// Importa as rotas individuais
const indexRoutes = require('./routes/index');
const dashboardRoutes = require('./routes/dashboard');
const transactionsRoutes = require('./routes/transactions');

// Rota principal para a homepage
router.use('/', indexRoutes);

// Rota para a dashboard
router.use('/dashboard', dashboardRoutes);

// Rota para transações
router.use('/transactions', transactionsRoutes);

module.exports = router;
