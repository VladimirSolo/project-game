const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');

router.get('/', (req, res) => {
  const user = req.session?.user;
  renderTemplate(MainPage, { user }, res);
});

module.exports = router;
