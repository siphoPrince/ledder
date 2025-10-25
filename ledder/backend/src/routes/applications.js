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

// get single id from applications
router.get("/:id", checkAuthenticated, (req, res) =>{
    db.get(
        "SELECT * FROM applications WHERE id = ? and userId = ?",
        [req.params.id, req.user.id],
        (err, row) => {
            if (err) return res.status(500).json({error: err.message});
            if (!row) return res.status(404).json({error: "Application not found"});
            res.json(row);
        }
    )
});

// update application
router.put("/:id", checkAuthenticated, (req, res) =>{
    const data = req.body;

    const stmt = db.prepare(
        `UPDATE applications
        SET companyName = ?, contactPerson = ?, contactNumber = ?, companyEmail = ?, jobTitle = ?, notes = ?, aboutCompany = ?, status = ?
        WHERE id = ? AND userId = ?`
    );

    stmt.run(
        data.companyName,
        data.contactPerson,
        data.contactNumber,
        data.companyEmail,
        data.jobTitle,
        data.notes,
        data.aboutCompany,
        data.status,
        req.params.id,
        req.user.id,
        function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Application updated successfully" });
        }
    );
    stmt.finalize();
    
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
