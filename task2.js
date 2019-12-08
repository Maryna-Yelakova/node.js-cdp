const csv = require('csvtojson');
const fs = require('fs');

const csvFilePath ='./csv/node_mentoring_t1_2_input_example.csv';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream('secret.txt');
readStream.pipe(csv()).pipe(writeStream);