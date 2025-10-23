const sqlit3 = require(' sqlite3').verbose();
const db = new sqlit3.Database('./users.db', (err)=>{
    if (err) console.error(err.messege);
    else console.log(' Connected to Sqlite Database.')
});

// user table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
    )`);