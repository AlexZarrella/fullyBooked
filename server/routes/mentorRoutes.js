const express    = require('express');
const mentorRoutes = express.Router();
const passport   = require('passport');
const bcrypt     = require('bcryptjs');
const User       = require('../models/user');
const Appointments = require('../models/appointment');
const Service      = require('../models/service');


//mentor signup
mentorRoutes.post('/signup', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const name     = req.body.name;
    const email    = req.body.email;
    const description = req.body.description;
    const weeklyPreferences = req.body.weeklyPreferences;
  
    if (!username || !password || !name || !email || !description || !weeklyPreferences) {
      res.status(400).json({ message: 'Please fill in all fields' });
      return;
    }

  
    User.findOne({ username }, '_id', (err, foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: 'The username already exists' });
        return;
      }
  
      const salt     = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
  
      const theUser = new User({
        username,
        password: hashPass
      });
  
      theUser.save((err) => {
        if (err) {
          res.status(400).json({ message: 'Something went wrong' });
          return;
        }
  
        req.login(theUser, (err) => {
          if (err) {
            res.status(500).json({ message: 'Something went wrong' });
            return;
          }
  
          res.status(200).json(req.user);
        });
      });
    });
  });


//mentor profile
mentorRoutes.get('/profile', (req, res ,next)=> {
    Service.find()
    .then((allTheServices)=> {
        res.json(allTheServices);
    })
    .catch((err)=> {
        res.json(err);
    })
    Appointments.find()
    .then((allTheAppointments)=> {
        res.json(allTheAppointments);
    })
    .catch((err)=> {
        res.json(err);
    })
});



module.exports = mentorRoutes;