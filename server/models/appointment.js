const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const appointmentSchema = new Schema({
  booked: Boolean,
  isPassed: Boolean,
  timeDate: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;