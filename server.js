const express = require('express');
const path = require('path');
const http = require('http');


const app = express();

app.use('/dist', express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => res.sendFile(
  path.join(__dirname, 'index.html'))
);

app.get('/api', (req, res) => res.sendFile(
  path.join(__dirname, 'api/database.json'))
);

const server = http.createServer(app)

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
