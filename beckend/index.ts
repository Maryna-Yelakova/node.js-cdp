import express from 'express';
import router from './router';
import app from './initialization';

// parse application/json
app.use(express.json());
app.use(router);

app.get('/', function (req, res) {
    res.send('Hello World!');
});
