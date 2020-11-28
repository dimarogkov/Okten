const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const { users } = require('./users/users');

const app = express();
let userIsLogin = '';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

// get require
app.get('/profile', (req, res) => {
    res.render('profile', { users, userIsLogin });
});
app.get('/logout', (req, res) => {
    res.redirect('/');
});
app.get('/', (req, res) => {
    res.render('login');
});
app.get('/registration', (req, res) => {
    res.render('registration');
});
app.get('/404', (req, res) => {
    res.render('404');
});

// post require
app.post('/registration', (req, res) => {
    const { nickname, email, password } = req.body;
    const find = users.find((user) => (user.email === email || user.nickname === nickname));
    if (find !== undefined) {
        userIsLogin = false;
        return res.redirect('/404');
    }
    users.push({ nickname, email, password });
    userIsLogin = true;
    return res.redirect('/profile');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const find = users.find((user) => (user.email === email && user.password === password));
    if (find !== undefined) {
        userIsLogin = true;
        return res.redirect('/profile');
    }
    userIsLogin = false;
    return res.redirect('/');
});

app.listen(3000);
