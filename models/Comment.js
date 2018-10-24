const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  creator_id: {
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
  }

});

module.exports = Comment = mongoose.model('comments', CommentSchema);
