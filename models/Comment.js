const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  body: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  toilet: {
    type: Schema.Types.ObjectId,
    ref: 'Toilet'
  }

});

module.exports = Comment = mongoose.model('comments', CommentSchema);
