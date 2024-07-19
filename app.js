const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/database1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes and other middleware

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost/database1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
