const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
const Comment = require("../../models/Comment");
const keys = require('../../config/keys');
const validateCommentInput = require('../../validations/comment');

router.post('/create', (req,res) => {
  console.log(req);

  const newComment = new Comment({
    creator: req.body.creator,
    body: req.body.body,
    rating: req.body.rating,
    toilet_id: req.body.toilet_id
  })
  newComment.save()
  .then(() => {
    res.json(newComment)
  })
    Toilet.findById(req.body.toilet_id)
    .then(toilet => {
      console.log(newComment);
      toilet.comments.unshift(newComment);
      console.log(toilet);
      toilet.save();
    })
    .catch(err => console.error(err))
});

router.get("/:id", (req,res) => {
  Comment.findById(req.params.id).then(comments => res.json(comment))
  .catch(err => res.status(404).json({nocommentfound: 'No comment found'}))
});

module.exports = router;
