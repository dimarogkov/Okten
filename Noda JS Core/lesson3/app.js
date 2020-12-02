const express = require('express');
const { usersRouter } = require('./routes');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRouter);

app.listen(port);
