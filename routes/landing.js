// basic template for a route file
const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("Welcome")
})

router.get('/about', (req,res)=>{
    res.send("About")
})

router.get('/contact-us', (req,res)=>{
    res.send("Contact us")
})

module.exports = router;