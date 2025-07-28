
const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  host: String,
  participants: [String],
  date: Date,
  link: String,
  title: String
}, { timestamps: true });

module.exports = mongoose.model('Meeting', meetingSchema);
