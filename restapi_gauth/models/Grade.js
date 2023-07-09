const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  coursecode: {
    type: String,
    required: true,
    max: 10
  },
  grade: {
    type: Number,
    required: false,
    min: 0,
    max: 5
  }
});

// const Grade = mongoose.model('Grade', GradeSchema);

module.exports = GradeSchema;
