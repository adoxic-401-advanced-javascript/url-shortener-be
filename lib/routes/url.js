const { Router } = require('express');
const Url = require('../model/Url');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/:id', ensureAuth, (req, res, next) => {
    const { oldUrl } = req.body;
    Url
      .create({ oldUrl })
      .then(url => {
        res.send(url);
      })
      .catch(next);
  });
