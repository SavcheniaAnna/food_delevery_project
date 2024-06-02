const express = require('express');
const path = require('path');

const app = express();

// Указываем Express использовать статическую папку для обслуживания изображений
app.use(express.static(path.join(__dirname, '../../../../../../img')));

// Другие настройки и роуты сервера

// Запуск сервера
app.listen(4000, () => {
  console.log('Сервер запущен на порту 4000');
});
