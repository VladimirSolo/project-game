require('dotenv').config();
require('@babel/register');
const express = require('express');

const app = express();
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`SERVER STATRED ON port ${PORT}`);
});
