const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  oldUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Url', schema);
