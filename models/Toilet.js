const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./Comment");

const ToiletSchema = new Schema({
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    required: true
  },
  address: {
    type: String,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]


});

module.exports = Toilet = mongoose.model('toilets', ToiletSchema);
