const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../db/models');
const Error = require('../views/Error');

router.get('/', (req, res) => {
  renderTemplate(Login, null, res);
});

router.post('/', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ where: { name } });
    if (user) {
      // ? compare - вернёт true / false
      const passCheck = await bcrypt.compare(password, user.password);
      // Проверка password
      if (passCheck) {
        // создание+сохранение сессии и редирект
        req.session.user = user.name;
        req.session.save(() => {
          res.redirect('/');
        });
      } else {
        renderTemplate(Login, {
          message: 'ERROR PASSWORD, PLEASE TRY AGAIN',
          error: {},
        }, res);
      }
    } else {
      renderTemplate(Login, {
        message: 'ERROR EMAIL OR PASSWORD, PLEASE TRY AGAIN',
        error: {},
      }, res);
    }
  } catch (error) {
    renderTemplate(Error, {
      message: 'ERROR LOGIN, PLEASE TRY AGAIN',
      error: {},
    });
  }
})

module.exports = router;
