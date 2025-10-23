const express = require('express');
const passport = require('passport');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./db');

//register
router.post('/register', async (req, res) =>{
  const {email, password} = req.body;
  if(!email || !password) return res.status(400).json({message: 'email and password required'});

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(`INSERT INTO users(email, password) VALUES(?, ?)`, [email, hashedPassword], function(err){
    if(err) return res.status(400).json({message: 'User already exists or error'});
    res.json({message:'user registered successfully!'})
  });
});

//login
router.post('login', (req, res, next) =>{
  passport.authenticate('local', (err, user, info) =>{
    if (err) return next(err);
    if (!user) return res.status(400).json({message: info.message});

    req.logIn(user,(err)=>{
      if(err) return next(err);
      res.json({message:'Login sucessful!', user: {id: user.id, email: user.email}})
    });
  })(req, res, next);
});

//logout
router.post('/logout', (req, res) =>{
  req.logout(()=>{
    res.json({ message: 'Logged out sucessfully'})
  });
});

module.exports = router;