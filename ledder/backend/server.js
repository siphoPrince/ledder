const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./src/routes/auth");
const applicationsRoutes = require("./src/routes/applications");
const initializepassport = require('./src/passportConfig');

initializepassport(passport)
const app = express();

// middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// sessions
app.use(
    session({
        secret: "Sipho",
        resave: false,
        saveUninitialized: false,
    })
);


//passoprt
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api/auth",authRoutes);
app.use("/api/applications", applicationsRoutes);

// start server
const port = 3000;
app.listen(port, ()=>{
    console.log(`running on port ${port}`);
})