// config/database.js
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Conecta usando a string de conexão sem passar opções depreciadas
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado ao MongoDB!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
