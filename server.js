const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Database Connection (Placeholder for Sprint 1)
// In a real app, use connection pooling/env vars
/*
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'mysql_db',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) console.error('Error connecting to MySQL:', err);
    else console.log('Connected to MySQL database!');
});
*/

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Community Food Share', 
        message: 'Welcome to Balen Community Food Share!' 
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
