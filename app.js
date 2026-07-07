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

// Basic Route - Lab 5 MVC rendering with variables and looping
app.get('/', (req, res) => {
    const test_data = [
        'Lab 1 - Version Control with Git (Completed)',
        'Lab 2 - Semantic HTML5 & CSS Layouts (Completed)',
        'Lab 3 - Docker Containers & DB Scaffolding (Completed)',
        'Lab 4 - Express Routing (Completed)',
        'Lab 5 - Model-View-Controller & PUG Templates (Completed)'
    ];
    res.render('index', {
        title: 'CMP-N204-0 - Software Engineering Labs',
        heading: 'Software Engineering Labs Index',
        data: test_data
    });
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

// Lab 5 Database MVC rendering for a single row by ID
app.get('/db_test/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sql = 'SELECT * FROM test_table WHERE id = ?';
        const results = await db.query(sql, [id]);
        if (results.length > 0) {
            res.render('db', {
                title: `Record Details - ID ${id}`,
                heading: `Database Record Detail (ID: ${id})`,
                data: results
            });
        } else {
            res.status(404).send(`<h1>Record Not Found</h1><p>No record found with ID ${id}</p>`);
        }
    } catch (err) {
        res.status(500).send("Database error: " + err.message);
    }
});

// Lab 5 Database MVC rendering (Iterating records in table and list)
app.get('/db_test', async (req, res) => {
    try {
        const sql = 'SELECT * FROM test_table';
        const results = await db.query(sql);
        res.render('db', {
            title: 'Database Test Records',
            heading: 'All Student Records (Database View)',
            data: results
        });
    } catch (err) {
        res.status(500).send("Database error: " + err.message);
    }
});

// POST route to handle score submission
app.post('/submit-score', async (req, res) => {
    try {
        const { playerName, score } = req.body;
        
        // Determine role based on score (fewer attempts is better)
        let role = 'Apprentice Rank';
        const numScore = parseInt(score);
        if (numScore <= 3) role = 'Grandmaster (Top Score)';
        else if (numScore <= 5) role = 'Master Rank';
        else if (numScore <= 7) role = 'Challenger Rank';

        const sql = 'INSERT INTO test_table (name, score, role) VALUES (?, ?, ?)';
        await db.query(sql, [playerName, numScore, role]);
        
        // Redirect to leaderboard after submission
        res.redirect('/db_test');
    } catch (err) {
        res.status(500).send("Database error: " + err.message);
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Access at http://localhost:${port}`);
});
