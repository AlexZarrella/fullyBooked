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
  location: [String],
  weeklyPreferences: [Array],
  myAppointments: [String]
});

const User = mongoose.model('User', userSchema);
module.exports = User;