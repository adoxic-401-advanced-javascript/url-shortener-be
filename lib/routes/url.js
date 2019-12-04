const { Router } = require('express');
const Url = require('../model/Url');
const nanoid = require('nanoid');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/urls', ensureAuth, (req, res, next) => {
    const { oldUrl, userId } = req.body;
    const newUrl = nanoid(6);
    Url
      .create({ oldUrl, newUrl, userId })
      .then(url => {
        res.send(url);
      })
      .catch(next);
  })
  .get('/urls', ensureAuth, (req, res) => {
    res.send(req.urls);
  })
  .get('./urls/:userId', ensureAuth, (req, res) => {
    res.send(req.params);
  })
  .get('./urls/:newUrl', ensureAuth, (req, res) => {
    res.send(req.params);
  });
