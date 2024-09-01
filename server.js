const express = require('express');
const path = require('path')
const app = express()

// Serve the static files from the dist directory
app.use(express.static(__dirname + '/dist/netflix-clone'));


// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/netflix-clone/index.html'));
});



app.listen(process.env.PORT || 8080);














