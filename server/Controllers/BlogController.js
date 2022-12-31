const asyncHandler = require('express-async-handler');
const Blog = require('../Models/BlogsSchema');


// @desc Post Single Blog
// @Route POST /api/blogs
// @access Private
// URL : http://localhost:3001/api/blog/create
const PostBlog = asyncHandler(async (req, res) => {
    const { title, Image, Content } = req.body;
    if ( !title || !Image || !Content ){
        res.status(400)
        .json({message: "Please fill all the fields"})
    }
    // create blog
    const blog = await Blog.create({
        title,
        Image,
        Content
    })
    if (blog) {
        res.status(201)
        .json({message: "Blog created successfully"})
    }else  {
        res.status(400)
        .json({message: "Invalid Blog data"})
    }
})

module.exports = PostBlog;