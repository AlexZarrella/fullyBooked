const express    = require('express');
const apptRouter = express.Router();
const passport   = require('passport');
const bcrypt     = require('bcryptjs');
const User       = require('../models/user');
const Appointments = require('../models/appointment');
const Service      =require('../models/service');

apptRouter.post('/private/addtimes', (req, res, next)=> {
    const index = req.body.index;
    const day = req.body.day;
    console.log(day, index);

User.findById(req.user._id)
.then((theUser)=>{

    const blah = Object.assign(theUser);
    theUser = {};
    theUser = blah;
    theUser.weeklySchedule[day][index].value = true;

    console.log(theUser.weeklySchedule[day])
        theUser.save()
.then((response)=>{
    res.json(response);
})
.catch((err)=>{
    res.json(err);
})
})
.catch((err)=>{
    res.json(err);
})
})

apptRouter.post('/private/removetimes', (req, res, next)=> {
    const index = req.body.index;
    const day = req.body.day;
    console.log(day, index);

User.findById(req.user._id)
.then((theUser)=>{

    const blah = Object.assign(theUser);
    theUser = {};
    theUser = blah;
    theUser.weeklySchedule[day][index].value = false;

    console.log(theUser.weeklySchedule[day])
        theUser.save()
.then((response)=>{
    res.json(response);
})
.catch((err)=>{
    res.json(err);
})
})
.catch((err)=>{
    res.json(err);
})
})

apptRouter.post('/appointments/create', (req, res, next)=> {

    Appointments.create({
        booked: req.body.booked,
        isPassed: req.body.isPassed,
        timeDate: req.body.timeDate
    })
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err);
    })
});

//edit and update
apptRouter.post('/appointments/:id/update', (req, res, next)=>{
    const id = req.params.id;

    Appointments.findByIdAndUpdate(id, {
        booked: req.body.booked,
        isPassed: req.body.isPassed,
        timeDate: req.body.timeDate
    })
    .then((theUpdatedAppt)=>{
        res.json(theUpdatedAppt)
    })
    .catch((err)=>{
        res.json(err);
    })
});

//delete route
apptRouter.post('/appointments/:id/delete', (req, res, next)=>{
    const id = req.params.id;

    Appointments.findByIdAndRemove(id)
    .then((theAppt)=>{
        res.json(theAppt)
    })
    .catch((err)=>{
        res.json(err);
    })
})


module.exports = apptRouter;