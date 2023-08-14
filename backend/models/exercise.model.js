const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exerciseName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
