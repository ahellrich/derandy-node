const express = require('express')
const app = express();
const port = process.env.PORT;
const path = require('path');
const alert = require("./js-modules/alert");

alert.alert_fun();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.listen(port);