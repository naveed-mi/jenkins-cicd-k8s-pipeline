// app/server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from CI/CD App!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

