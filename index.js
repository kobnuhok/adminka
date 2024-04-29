const express = require('express');

const PORT = 3005;

const app = express();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
