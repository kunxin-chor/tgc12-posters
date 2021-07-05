const express = require('express')
const router = express.Router();

// #1 import our poster model
const {Poster} = require('../models/index')

router.get('/', async (req,res)=>{
    // #2 fetch all the products using the poster model
    let posters = await Poster.collection().fetch();
    res.render('posters/index', {
        'posters': posters.toJSON()
    })
})

module.exports = router;