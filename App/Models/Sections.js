//section model
const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  sectionID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;