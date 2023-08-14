// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com', // Базовый URL для всех запросов
  timeout: 10000, // Время ожидания для запросов (в миллисекундах)
  headers: {
    'Content-Type': 'application/json', // Тип контента
  },
});

export default instance;

