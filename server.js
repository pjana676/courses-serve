
const express = require('express');

const app = express();

// Middleware to handle JSON body parsing
app.use(express.json());



const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});