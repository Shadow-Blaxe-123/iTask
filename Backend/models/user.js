const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    password:  {
        type: String,
        required: true
      },
    email:  {
        type: String,
        required: true,
        unique: true
      },
    completed:  {
        type: String,
        required: true
      },
    date: {
        type: Date,
        default: Date.now
    },
    dueDate: Date
  });

  const User = mongoose.model('User', schema);

  module.exports = User;