import express from 'express';
import router from './router';

// Create a new express application instance
const app: express.Application = express();
// parse application/json
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
