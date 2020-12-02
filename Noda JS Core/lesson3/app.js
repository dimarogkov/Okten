const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const { usersRouter } = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');

app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.use('/users', usersRouter);

app.listen(3000);
