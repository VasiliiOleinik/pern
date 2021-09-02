require('dotenv').config(); // dotenv - нужен для того, чтобы можно было получать данные из .env
const express = require('express');
const sequelize = require('./db'); // настройки и подключение к БД
const models = require('./models/models'); // Модели БД
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json()); // функция, для того, чтобы можно было парсить json

const start = async () => {
    try {
        await sequelize.authenticate() // с помощью этой функции мы будем подключаться к БД
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start();
