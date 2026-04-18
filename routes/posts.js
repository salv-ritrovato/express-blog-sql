const express = require('express');
const router = express.Router();
// Importing my variables from the controllers folder
const { allPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postscontroller');

// Defining my routes
// Index
router.get('/', allPosts);

// Show
router.get('/:id', getPost);

// Create
router.post('/', createPost);

// Update
router.put('/:id', updatePost);

// Delete
router.delete('/:id', deletePost);

module.exports = router;