require('dotenv').config();
require('@babel/register');
const express = require('express');

const { sequelize } = require('./db/models');

const app = express();
const { PORT } = process.env;

app.listen(PORT ?? 3100, async () => {
  console.log(`SERVER STATRED ON port ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Connection to DB established');
  } catch (error) {
    console.log('Connection to DB not connect', error);
  }
});
