'use strict';

import fs from 'fs';
import express from 'express';

const PORT = 8080;
const app = express();

app.get('/phones', (req, res) => {
  const phones = fs.readFileSync('./data/phones.json', 'utf-8');

  res.send(JSON.parse(phones));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
