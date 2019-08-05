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


    // ensuring back and front are connected
app.get('/', (req, res) => {
    res.send('Hello')
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// establishing port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('listening on 8000')
})