const express = require('express');
const { usersRouter } = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRouter);

app.listen(3000);
