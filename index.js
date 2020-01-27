// We will be using environment variables to hide important info when hosting
require('dotenv').config();
const server = require('./server.js');

const port = process.env.PORT;
// The server will listen at this port number for any requests being made
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
