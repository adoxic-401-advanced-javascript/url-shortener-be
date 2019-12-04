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
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Url', schema);
