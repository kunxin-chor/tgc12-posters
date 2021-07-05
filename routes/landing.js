// basic template for a route file
const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render("welcome")
})

router.get('/about', (req,res)=>{
    res.render("about")
})

router.get('/contact-us', (req,res)=>{
    res.render("contact")
})

module.exports = router;