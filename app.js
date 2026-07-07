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

// Basic Route
app.get('/', (req, res) => {
    res.render('index', { title: 'Community Food Share', message: 'Welcome to Group Balen\'s Project!' });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Access at http://localhost:${port}`);
});
