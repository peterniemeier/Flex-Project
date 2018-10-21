const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }

});

const Event = mongoose.model('events', EventSchema);
module.exports = Event;
