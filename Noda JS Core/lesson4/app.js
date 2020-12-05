const express = require('express');
const db = require('./db').getInstance();
const { usersRouter } = require('./routes');

const app = express();
const port = 5000;

db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRouter);

app.listen(port);
