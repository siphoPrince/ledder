const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('./db');


function initialize(passport){
    const authenticateUser = (email, password, done) =>{
        db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user)=>{
            if(err) return done(err);
            if(!user) return done(null, false, { message:' No user with that email found'});

            try{
                if (await bcrypt.compare(password, user.password)){
                    return done(null, user);
                } else{
                    return done(null, user, {message: ' Password Incorrect'})
                }
            } catch (e){
                return done(e);
            }
        });
    }

    passport.use(new LocalStrategy({usernameField: 'email' }, authenticateUser))

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        db.get(`SELECT * FROM  users WHERE id = ?`, [id], (err, user) =>{
            if(err) return done(err);
            done(null, user);
        });
    });
}

module.exports = initialize;

