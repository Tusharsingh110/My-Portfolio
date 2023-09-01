const express = require('express');
const Feedback = require('../models/Feedback');
const router =  express.Router();
const {body,validationResult} = require('express-validator')


router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
],async (req,res) => {
    // console.log(req.body)
    // const feedback  = Feedback(req.body)
    // feedback.save()
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
    }
    try{
        const feedback = await Feedback.create({
            name: req.body.name,
            email: req.body.email,
            feedbackType: req.body.feedbackType,
            collab: req.body.collab,
            message: req.body.message
        });
        res.json(feedback);
    }
    catch (error) {
        if(error.code === 11000) {
            // duplicate key error
            return res.status(400).json({error:'E-mail already exists!'})
        }
        console.log(error);
        res.status(500).json({error:'Server error!'});
    }
})

module.exports = router