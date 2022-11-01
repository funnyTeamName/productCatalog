'use strict';

const fs = require('fs');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.use(express.static('./data/'));

app.get('/products', (req, res) => {
  const phones = fs.readFileSync('./data/phones.json', 'utf-8');

  res.statusCode = 200;

  res.send(JSON.parse(phones));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
