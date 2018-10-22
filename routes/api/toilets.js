const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Toilet = require("../../models/Toilet");
const validateToiletInput = require('../../validations/toilet');

router.get('/', (req,res) => {
  Toilet.find().sort({date: -1}).then(events => res.json(toilets))
  .catch(err => res.status(404).json({notoiletsfound: 'No toilets found'}))
});

router.get("/:id", (req,res) => {
  Toilet.findById(req.params.id).then(event => res.json(toilet))
  .catch(err => res.status(404).json({notoiletfound: 'No toilet found'}))
});


router.post('/', passport.authenticate('jsonwebtoken', {session:false}), (req,res) => {
  const {errors, isValid} = validateToiletInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const newToilet = new Toilet({
    lat: req.body.lat,
    lng: req.body.lng,
    title: req.body.title,
    creator_id: req.user.id
  })

  newToilet.save().then(toilet => res.json(toilet));
});
