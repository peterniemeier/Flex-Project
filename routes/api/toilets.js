const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Toilet = require("../../models/Toilet");
const validateToiletInput = require('../../validations/toilet');

router.get('/', (req,res) => {
  Toilet.find().sort({date: -1}).then(toilets => res.json(toilets))
  .catch(err => res.status(404).json({notoiletsfound: 'No toilets found'}))
});

router.get("/:id", (req,res) => {
  Toilet.findById(req.params.id).then(toilet => res.json(toilet))
  .catch(err => res.status(404).json({notoiletfound: 'No toilet found'}))
});


router.post('/', passport.authenticate('jsonwebtoken', {session:false}), (req,res) => {
  const {errors, isValid} = validateToiletInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors)
  }

router.post('/create', (req,res) => {

  const { errors, isValid} = validateToiletInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors)
  }
  const newToilet = new Toilet({
    lat: req.body.lat,
    lng: req.body.lng,
    title: req.body.title,
    // creator_id: req.body.user.id
  })
  newToilet.save().then(
      res.json({
        success:true,

      })
  )
})

  router.delete('/destroy', (req,res) => {
    Toilet.findByIdAndRemove(req.params.id, (err,toilet) => {
      if(err){
        return res.json({'success':false,'message':'Unable to locate toilet'});
      }
    return res.json({'success':true,'message':toilet.title+' deleted successfully'});
    })
  }

  router.patch('/update', (req,res) => {
    Toilet.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
      if(err){
        return res.json({'success':false,'message':'Unable to locate toilet'});
      }
    return res.json({'success':true,'message':'Updated successfully'});
    })
  }
