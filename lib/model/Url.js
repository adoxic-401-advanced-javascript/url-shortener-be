const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  oldUrl: {
    type: String,
    required: true
  },
  newUrl: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Url', schema);
