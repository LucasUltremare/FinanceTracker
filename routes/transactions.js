const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Listar transações
router.get('/', async (req, res) => {
    const transactions = await Transaction.find();
    res.render('transactions', { transactions });
});

// Adicionar transação
router.post('/add', async (req, res) => {
    const { type, amount, category } = req.body;
    await Transaction.create({ type, amount, category });
    res.redirect('/transactions');
});

// Excluir transação
router.post('/delete/:id', async (req, res) => {
    await Transaction.findByIdAndDelete(req.params.id);
    res.redirect('/transactions');
});

module.exports = router;
