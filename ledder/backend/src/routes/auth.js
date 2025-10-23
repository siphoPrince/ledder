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




router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;