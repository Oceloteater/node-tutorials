const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream(__dirname + '/lorem-ipsum.txt');
const writable = fs.createWriteStream(__dirname + '/lorem-ipsum-copy.txt');
const compressed = fs.createWriteStream(__dirname + '/lorem-ipsum-copy.txt.gz');

const gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);