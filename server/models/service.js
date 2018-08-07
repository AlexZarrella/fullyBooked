const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User     = require('../models/user');

const serviceSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: "User"},
  category: [String],
  description: String,
  pricing: String,
  appointments: [String]
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;