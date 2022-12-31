const express = require('express');
const router = express.Router();
const PostBlog = require('../Controllers/BlogController');

router.post('/create', PostBlog);

module.exports = router