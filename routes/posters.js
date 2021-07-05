const express = require('express')
const router = express.Router();

// #1 import our poster model
const {Poster} = require('../models/index')

// Import in the forms
const { bootstrapField, createProductForm} = require('../forms')

router.get('/', async (req,res)=>{
    // #2 fetch all the products using the poster model
    let posters = await Poster.collection().fetch(); // <-- Poster represents the table
    res.render('posters/index', {
        'posters': posters.toJSON()
    })
})

router.get('/create', (req,res)=>{
    const productForm = createProductForm();
    res.render('posters/create', {
        'form': productForm.toHTML(bootstrapField)
    })
})

router.post('/create', (req,res)=>{
    const productForm = createProductForm();
    productForm.handle(req, {
        'success': async(form)=> {
            // 1. create an instance of the Posters model
            // rmb: the Poster model represents the posters table
            //      the INSTANCE of a poster model represents one row in the posters table
            const poster = new Poster(); // <-- one INSTANCE means ONE ROW in the table
            poster.set('title', form.data.title);
            poster.set('cost', form.data.cost);
            poster.set('description',form.data.description);
            poster.set('date', form.data.date);
            poster.set('stock', form.data.stock);
            poster.set('height', form.data.height);
            poster.set('width', form.data.width);
            await poster.save();
            res.redirect('/posters')
        },
        'error': async(form) => {
            res.render('posters/create',{
                form: form.toHTML(bootstrapField)
            })
        }
    })
})

module.exports = router;