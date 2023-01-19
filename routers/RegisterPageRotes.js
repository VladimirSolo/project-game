const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');

const { User } = require('../db/models');

router.get('/', (req, res) => {
  renderTemplate(Register, {}, res);
});

router.post('/', async (req, res) => {
  const { name, password } = req.body;
  // console.log(req.body);
  try {
    if (name && password) {
      // hash password
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, password: hash });
      // creare session
      req.session.user = { id: newUser.id, name: newUser.name };
      // console.log('req.session.user------------>', req.session.user);
      // save session
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      renderTemplate(Register, {
        message: 'ERROR REGISTRATION FORM',
        error: {},
      }, res);
    }
  } catch (error) {
    renderTemplate(Error, {
      message: 'ERROR REGISTRATION FORM',
      error: {},
    });
  }
});

module.exports = router;
