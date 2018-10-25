const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Toilet = require("Toilet");

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
  toilet_id: {
    type: Schema.Types.ObjectId,
    ref: 'Toilet'
  }

});

CommentSchema.post("save", function(saved){
  console.log("Comment didn't make it")
  Toilet.findByIdAndUpdate(this.toilet_id, {$push:{comments: this}})
  .then( () => saved());
}


module.exports = Comment = mongoose.model('comments', CommentSchema);
