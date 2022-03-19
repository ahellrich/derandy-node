const express = require('express')
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.listen(port);