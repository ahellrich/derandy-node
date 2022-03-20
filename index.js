const express = require('express')
const app = express();
const port = process.env.PORT;
const path = require('path');
const cors = requite('cors');



app.use(express.static(path.join(__dirname, 'public')));

app.use(cors);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.listen(port);