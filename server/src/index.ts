'use strict';

const fs = require('fs');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.use(express.static('./data/'));

app.get('/products', (req, res) => {
  const phones = JSON.parse(fs.readFileSync('./data/phones.json', 'utf-8'));

  res.statusCode = 200;

  res.send(phones);
});

app.get('/products/new', (req, res) => {
  const phones = JSON.parse(fs.readFileSync('./data/phones.json', 'utf-8'))
    .sort((p1, p2) => p2.year - p1.year)
    .splice(0, 8);

  res.statusCode = 200;

  res.send(phones);
});

app.get('/products/discount', (req, res) => {
  const phones = JSON.parse(fs.readFileSync('./data/phones.json', 'utf-8'))
    .filter(phone => phone.price < 1000)
    .sort((p1, p2) => p2.price - p1.price)
    .splice(0, 8);

  res.statusCode = 200;

  res.send(phones);
});

app.get('/products/:productId', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/phones.json', 'utf-8'));

  const { name } = data.find(phone => phone.id === req.params.productId);

  const phonePath = name.split(' ').join('-');

  const foundPhone = fs.readFileSync(`./data/phones/${phonePath.toLowerCase()}.json`, 'utf-8');

  res.send(JSON.parse(foundPhone));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
