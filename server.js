const express = require('express');
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', function (req, res) {
    res.render('home');
});

// Set Template
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.listen(PORT, function () {
    console.log(`Server : http://localhost:${PORT}`);
});
