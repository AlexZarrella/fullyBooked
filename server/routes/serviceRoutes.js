const express    = require('express');
const serviceRouter = express.Router();
const passport   = require('passport');
const bcrypt     = require('bcryptjs');
const User       = require('../models/user');
const Appointments = require('../models/appointment');
const Service      =require('../models/service');

//mentor creates service
serviceRouter.post('/private/profile/services/create', (req, res, next)=> {
    Service.create({
        user: req.user._id,
        category: req.body.category,
        description: req.body.description,
        pricing: req.body.pricing,
    })
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err);
        })
})

//mentor edit service
// serviceRouter.post('/private/profile/services/:id/edit', (req, res, next)=> {
//     const id = req.params.id;

//     Service.findById(id)
//     .then((theService)=>{
//         res.json(theService)
//     })
//     .catch((err)=>{
//         res.json(err);
//     })
// });

//update service
serviceRouter.post('/private/profile/services/:id/edit', (req, res, next)=>{
    const id = req.params.id;

    Service.findByIdAndUpdate(id, {
        category: req.body.category,
        description: req.body.description,
        pricing: req.body.pricing
    })
    .then((theUpdatedService)=>{
        res.json(theUpdatedService)
    })
    .catch((err)=>{
        res.json(err);
    })
})

//delete service
serviceRouter.post('/private/profile/services/:id/delete', (req, res, next)=>{
    const id = req.params.id;

    Service.findByIdAndRemove(id)
    .then((theService)=>{
        res.json('/private/profile')
    })
    .catch((err)=>{
        res.json(err);
    })
})

serviceRouter.get('/private/profile/services/:id', (req, res, next)=>{
    const id = req.params.id

    Service.findById(id)
        .then((theService)=>{
            res.json(theService)
    })
        .catch((err)=>{
        res.json(err)
    })
})




module.exports = serviceRouter;