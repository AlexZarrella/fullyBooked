const express    = require('express');
const authRoutes = express.Router();
const passport   = require('passport');
const bcrypt     = require('bcryptjs');
const User       = require('../models/user');
const Appointments = require('../models/appointment');
const Service    = require('../models/service');


authRoutes.post('/signup',(req, res, next) => {
  console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const name     = req.body.name;
    const email    = req.body.email;
    const location = req.body.location;
    const service  = req.body.service;

    if (!username || !password || !name || !email || !location || !service) {
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
      let theUser;


      
  if(service){

    theUser = new User({
      username,
      password: hashPass,
      name,
      email,
      location,
      service,
      weeklySchedule: {
     
        monday: [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
                 {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
                 {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
                 {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
                 {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
                 {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],
   
       tuesday: [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
                 {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
                 {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
                 {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
                 {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
                 {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],
   
     wednesday:  [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
                 {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
                 {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
                 {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
                 {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
                 {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],
   
       thursday: [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
                 {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
                 {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
                 {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
                 {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
                 {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],
   
       friday:   [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
                 {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
                 {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
                 {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
                 {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
                 {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],
   
       saturday: [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
                 {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
                 {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
                 {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
                 {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
                 {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],
   
       sunday:   [{time: "12am - 1am", value: false}, {time: "1am-2am", value: false},{time: '2am-3am', value: false}, {time: '3am-4am', value: false},
                 {time: '4am-5am', value: false}, {time: '5am-6am', value: false},{time: '6am-7am', value: false}, {time: '7am-8am', value: false},
                 {time: '8am-9am', value: false}, {time: '9am-10am', value: false}, {time: '10am-11am', value: false}, {time: '11am-12pm', value: false}, 
                 {time: '12pm-1pm', value: false}, {time: '1pm-2pm', value: false}, {time: '2pm-3pm', value: false}, {time: '3pm-4pm', value: false}, 
                 {time: '4pm-5pm', value: false}, {time: '5pm-6pm', value: false}, {time: '6pm-7pm', value: false}, {time: '7pm-8pm', value: false}, 
                 {time: '8am-9pm', value: false}, {time: '9pm-10pm', value: false}, {time: '10pm-11pm', value: false}, {time: '11pm-12am', value: false}],
               }
       
    });
  } else{
    theUser = new User({
      username,
      password: hashPass,
      name,
      email,
      location,
      service,
      weeklySchedule:{}
    });

  }
  
      theUser.save((err) => {
        if (err) {
          res.status(400).json({ message: 'Something went wrong'});
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

  authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }
  
      if (!theUser) {
        res.status(401).json(failureDetails);
        return;
      }
  
      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Something went wrong' });
          return;
        }
  
        // We are now logged in (notice req.user)
        res.status(200).json(req.user);
      });
    })(req, res, next);
  });

  authRoutes.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
  });

  authRoutes.get('/loggedin', (req, res, next) => {
    if (req.isAuthenticated()) {
      res.status(200).json(req.user);
      return;
    }
  
    res.status(403).json({ message: 'Unauthorized' });
  });

  authRoutes.get('/private/profile', (req, res, next) => {
    if (req.isAuthenticated()) {
      res.json({ message: 'This is a private message'});
      return;
    }
  
    res.status(403).json({ message: 'Unauthorized' });
  });

  authRoutes.get('/private/search', (req, res, next)=>{

  })

  authRoutes.get('/private/profile', (req, res, next)=>{
    const id = req.params.id;
    if (req.isAuthenticated()) {
      res.json({ message: 'This is a private message'});
      return;
    }

    User.findById(id)
    .then((theUser)=>{
      res.json(theUser);
    })
    .catch((err)=>{
      res.json(err);
    })
  })

  authRoutes.post('/private/profile/edituser', (req, res, next)=> {

    const userID = req.user._id

    User.findByIdAndUpdate(userID, {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        location: req.body.location,
        description: req.body.description,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        linkedin: req.body.linkedin
    })
    .then((theUpdatedUser)=>{
        res.json(theUpdatedUser)
    })
    .catch((err)=>{
        res.json(err);
    })
  })

  authRoutes.get('/private/userjobs', (req, res, next)=> {
    const userID = req.user._id;

    Service.find({user: userID})
    .then((userJobs)=> {
      res.json(userJobs);
    })
    .catch((err)=>{
      res.json(err);
    })

  })



module.exports = authRoutes;









