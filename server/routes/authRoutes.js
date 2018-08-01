const express    = require('express');
const authRoutes = express.Router();
const passport   = require('passport');
const bcrypt     = require('bcryptjs');
const User       = require('../models/user');
const Appointments = require('../models/appointment');

authRoutes.post('/signup', (req, res, next) => {
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
  
      const theUser = new User({
        username,
        password: hashPass,
        name,
        email,
        location,
        service
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
      res.json({ message: 'This is a private message' });
      return;
    }
  
    res.status(403).json({ message: 'Unauthorized' });
  });

  authRoutes.get('/private/search', (req, res, next)=>{

  })

  authRoutes.get('/private/:id/profile', (req, res, next)=>{
    const id = req.params.id;

    User.findById(id)
    .then((theUser)=>{
      res.json(theUser);
    })
    .catch((err)=>{
      res.json(err);
    })
  })



  



module.exports = authRoutes;









