require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

// session require
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// sequelize
const { sequelize } = require('./db/models');
// import from .env
const { PORT, SESSION_SECRET } = process.env;
// routers
const mainRouter = require('./routers/mainPageRoter');
const registerPage = require('./routers/RegisterPageRotes');
const loginPage = require('./routers/LoginPageRotes');

const app = express();

// middelware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// session
app.use(session(
  {
    name: 'Game',
    store: new FileStore(),
    secret: SESSION_SECRET ?? 'secret word',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    },
  },
));

app.use('/', mainRouter);
app.use('/register', registerPage);
app.use('/login', loginPage);

// Logout
app.get('/logout', (req, res) => {
  // kill session
  req.session.destroy(() => {
    res.clearCookie('Game');
    res.redirect('/');
  });
});

app.listen(PORT ?? 3100, async () => {
  console.log(`SERVER STATRED ON port ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Connection to DB established');
  } catch (error) {
    console.log('Connection to DB not connect', error);
  }
});
