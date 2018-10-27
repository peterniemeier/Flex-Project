const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
const Comment = require("../../models/Comment");
const keys = require('../../config/keys');
const validateCommentInput = require('../../validations/comment');

router.post('/create', (req,res) => {
  const newComment = new Comment({
    creator: req.body.creator,
    body: req.body.body,
    rating: req.body.rating,
    toilet_id: req.body.toilet_id
  })
  newComment.save()
  // .then(() => {
  //   res.json(newComment)
  // })
    Toilet.findById(req.body.toilet_id)
    .then(toilet => {
      toilet.comments.unshift(newComment);

      //re-calc avgRating
      let totalComments = toilet.comments.length;
      (toilet.ratingsSum += newComment._doc.rating) / totalComments;
      toilet.save()
      .then(() => {
        res.json(toilet);
      })
    })
    .catch(err => console.error(err))
});

router.get("/:id", (req,res) => {
  Comment.findById(req.params.id).then(comments => res.json(comment))
  .catch(err => res.status(404).json({nocommentfound: 'No comment found'}))
});

module.exports = router;
