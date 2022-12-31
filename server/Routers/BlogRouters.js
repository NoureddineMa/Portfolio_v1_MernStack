const express = require('express');
const router = express.Router();
const {PostBlog, GetAllBlog , UpdateBlog , DeleteBlog , GetBlogById} = require('../Controllers/BlogController');

router.post('/create', PostBlog);
router.get('/getAll', GetAllBlog);
router.put('/update/:id', UpdateBlog);
router.delete('/delete/:id', DeleteBlog);
router.get('/getById/:id', GetBlogById);


module.exports = router