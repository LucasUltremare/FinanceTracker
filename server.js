// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const routes = require('./routes'); // Importa o arquivo routes/index.js
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// Conecta ao MongoDB
connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Registra as rotas centralizadas
app.use('/', routes);

app.use(session({
  secret: process.env.SESSION_SECRET || 'chave-secreta',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
