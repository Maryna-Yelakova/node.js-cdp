import express from 'express';
import router from './router';
import app from './initialization';
import cors from 'cors';
import winston from 'winston';

const PORT = process.env.PORT || 8000;
const tsFormat = () => (new Date()).toLocaleTimeString();

process
    .on('uncaughtException', err => {
        console.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level}: ${info.message}`;
        })
    ),
    transports: [
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: 'info'
        }),
        new (winston.transports.File)({
            filename: 'Lee-Min-ho-fan-node.log',
            level: 'error'
        })
    ]
});

app.use(cors()); //enable CORS

//parse application/json
app.use(express.json());
app.use(router);

// enable cors for all origins
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "x-total-count");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

    next();
});

app.use((err, request, response) => {
    if(err){
        logger.error(`${request.req.method}, ${err.url}`);
        response.status(500).send('Something broke!')
    }
});




// app.use(express.static(__dirname + '/../frontend'));
// app.use('/', router);
//
app.get('/', function (req, res) {
    res.send('Hello World!');
});
