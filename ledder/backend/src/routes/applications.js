const express = require('express');
const router = express.Router();
const db = require('../db');

// Middleware to check login
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ error: 'Not authenticated' });
}

// Get all applications for logged-in user
router.get("/", checkAuthenticated, (req, res) => {
    db.all("SELECT * FROM applications WHERE userId = ?", [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Add new application
router.post("/", checkAuthenticated, (req, res) => {
    const data = req.body;

    const stmt = db.prepare(`
        INSERT INTO applications
        (userId, companyName, contactPerson, contactNumber, companyEmail, jobTitle, notes, aboutCompany, dateTime, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
        req.user.id,
        data.companyName,
        data.contactPerson,
        data.contactNumber,
        data.companyEmail,
        data.jobTitle,
        data.notes,
        data.aboutCompany,
        new Date().toISOString(), // use this as the timestamp
        data.status,
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, ...data });
        }
    );

    stmt.finalize();
});

module.exports = router;
