import csv from 'csvtojson';
import fs from 'fs';

const csvFilePath ='./csv/node_mentoring_t1_2_input_example.csv';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream('secret.txt');
readStream.pipe(csv())
    .on('error', function(e) { throw new Error(e);})
    .pipe(writeStream)
    .on('error', function(e) { throw new Error(e);});
