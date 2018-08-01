const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const serviceSchema = new Schema({
  category: [String],
  description: String,
  pricing: String,
  Appointments: [String]
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;