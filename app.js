const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {

    res.render('index', {pageTitle: 'Add User'}); 
});

app.get('/users', (req, res) => {
    res.render('users', {pageTitle: 'User', users: users}); 
});

app.post('/add-user', (req, res) => {
    users.push({name: req.body.username});
    res.redirect('/users');
});

app.listen(3001);