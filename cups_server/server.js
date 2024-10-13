const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

// Включаем CORS для всех запросов
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
}));

// URL к вашему JSON файлу в Google Cloud Storage
const cupsDataUrl = 'https://storage.googleapis.com/cups-tbilisi/cups_data.json';

// Маршрут для получения всех данных
app.get('/cups_data', async (req, res) => {
  try {
    const response = await axios.get(cupsDataUrl);
    res.setHeader('Content-Type', 'application/json');
    res.send(response.data);
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
    res.status(500).send('Ошибка сервера');
  }
});

// Маршрут для получения данных конкретного объекта по id
app.get('/cups_data/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(cupsDataUrl);
    const cupsData = response.data;
    const item = cupsData[id];

    if (item) {
      res.send(item);
    } else {
      res.status(404).send('Объект с таким id не найден');
    }
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
    res.status(500).send('Ошибка сервера');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});
