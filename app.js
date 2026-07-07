const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Set view engine to pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./services/db');

// Basic Route - Lab 4 Exercise 1: hello + your name
app.get('/', (req, res) => {
    res.send("Hello Bitu Babu Yadav");
});

// Lab 4 Exercise 2 & 3: roehampton route and logging URL to console
app.get('/roehampton', (req, res) => {
    console.log("Requested URL:", req.url);
    res.send("hello roehampton");
});

// Lab 4 Dynamic Route Exercise 1: hello/:name
app.get('/hello/:name', (req, res) => {
    console.log("Params:", req.params);
    res.send("Hello " + req.params.name);
});

// Lab 4 Optional Exercise 2: user/:id
app.get('/user/:id', (req, res) => {
    res.send("User ID: " + req.params.id);
});

// Lab 4 Optional Exercise 3: student/:name/:id
app.get('/student/:name/:id', (req, res) => {
    res.send("Student Name: " + req.params.name + ", ID: " + req.params.id);
});

// Lab 4 Optional Exercise 4: db_test/:id (Retrieving specific row)
app.get('/db_test/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sql = 'SELECT * FROM test_table WHERE id = ?';
        const results = await db.query(sql, [id]);
        if (results.length > 0) {
            res.send(`<h1>Student Details (ID: ${results[0].id})</h1><p>Name: <strong>${results[0].name}</strong></p><p>Role: ${results[0].role}</p>`);
        } else {
            res.status(404).send(`<h1>Record Not Found</h1><p>No record found with ID ${id}</p>`);
        }
    } catch (err) {
        res.status(500).send("Database error: " + err.message);
    }
});

// Database Test Route - Lab 3 verification and base route
app.get('/db_test', async (req, res) => {
    try {
        const sql = 'SELECT * FROM test_table';
        const results = await db.query(sql);
        res.json(results);
    } catch (err) {
        res.status(500).send("Database error: " + err.message);
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Access at http://localhost:${port}`);
});
