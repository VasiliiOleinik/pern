require('dotenv').config(); // dotenv - нужен для того, чтобы можно было получать данные из .env
const express = require('express');
const sequelize = require('./db'); // настройки и подключение к БД

const PORT = process.env.PORT || 5000;

const app = express();

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
