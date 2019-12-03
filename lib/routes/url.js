const { Router } = require('express');
const Url = require('../model/Url');
const nanoid = require('nanoid');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/urls', ensureAuth, (req, res, next) => {
    const { oldUrl } = req.body;
    const shortId = nanoid(6);
    Url
      .create({ oldUrl, shortId })
      .then(url => {
        res.send(url);
      })
      .catch(next);
  });
