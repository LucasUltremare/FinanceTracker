// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Exibe o formulário de login
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Processa o login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.redirect('/login?error=Credenciais inválidas');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.redirect('/login?error=Credenciais inválidas');
    }
    // Armazena o id do usuário na sessão
    req.session.userId = user._id;
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/login?error=Ocorreu um erro');
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// (Opcional) Rota de registro
router.get('/register', (req, res) => {
  res.render('register', { title: 'Registrar' });
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    req.session.userId = user._id;
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/register?error=Ocorreu um erro');
  }
});

module.exports = router;