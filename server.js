const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const helmet = require('helmet')

const path = require("path")

// middleware and security
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use(express.static(path.join(__dirname, "client", "build")))

//itunes api call
app.get('/search/:name/:type', (req, res) => {
    fetch(`https://itunes.apple.com/search?term=${req.params.name}&entity=${req.params.type}`)
    .then(res => res.json())
    .then(data => res.send(data));
    });


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

// establishing port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));


module.exports = app;