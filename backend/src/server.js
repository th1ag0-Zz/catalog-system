const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  '/api/products/images',
  express.static(path.resolve(__dirname, '..', 'uploads')),
);

app.use(require('./routes'));

const port = 3333;
app.listen(port, () => console.log(`Server rodando na porta ${port} 😄`));
