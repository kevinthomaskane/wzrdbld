const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
  }
});

module.exports = Work = mongoose.model("work", WorkSchema);