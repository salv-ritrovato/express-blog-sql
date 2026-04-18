const connection = require("../database/db");

// Index
const allPosts = (req, res) => {
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Query failed' });
        }

        res.json(results);
    });
}

// Show
const getPost = (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(item => item.id === id);
    if (!post) {
        return res.status(404).json({ message: "Post inesistente" })
    }
    res.json(post);
};

// Create
const createPost = (req, res) => {
    const { titolo, contenuto, immagine, tags } = req.body;
    const newPost = { id: Date.now(), titolo, contenuto, immagine, tags };
    posts.push(newPost);
    res.status(201).json({ message: "Post creato con successo!", post: newPost });
};

// Update
const updatePost = (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Post inesistente" });
    }
    posts[index] = { ...posts[index], ...req.body };
    res.json({ message: "Post aggiornato con successo!", post: posts[index] });
};

// Delete
const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = 'DELETE FROM posts WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Delete failed' });
        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: true,
                message: 'Post not found'
            });
        }
        res.sendStatus(204);
    });

}

module.exports = { allPosts, getPost, createPost, updatePost, deletePost };