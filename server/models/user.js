const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  description: String,
  image: String,
  email: String,
  service: Boolean,
  location: String,
  myAppointments: [Array]
});

const User = mongoose.model('User', userSchema);
module.exports = User;