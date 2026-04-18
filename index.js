// Importing express
const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

// Body parser
app.use(express.json());

// Import posts.js
const postsRouter = require('./routes/posts');

// Import Not Found error
const notFound = require("./middlewares/notfound");

// Import Error Handler
const errorHandler = require("./middlewares/errorhandler")

// Serves static files from 'public' at '/static'
app.use('/static', express.static('public'));

// Root route
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// Posts
app.use('/posts', postsRouter);

// notFound
app.use(notFound);

// errorHandler
app.use(errorHandler);

// Start the server on PORT
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
