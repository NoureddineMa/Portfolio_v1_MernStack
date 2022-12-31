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
        res.status(200)
        .json({message: "Blog created successfully"})
    }else  {
        res.status(400)
        .json({message: "Invalid Blog data"})
    }
})

// @desc Get all Blog
// @access Private
// URL : http://localhost:3001/api/blog/getAll

const GetAllBlog = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});
    if(blogs){
        res.status(200)
        .json(blogs)
    } else {
        res.status(404)
        .json({message: "Blogs not found"})
    }
})

// @desc update Blog By id 
// @access Private
// URL : http://localhost:3001/api/blog/update/:id

const UpdateBlog = asyncHandler(async (req, res) => {
    const { title, Image, Content } = req.body;
    if ( !title || !Image || !Content ){
        res.status(400)
        .json({message: "Please fill all the fields"})
    }
    const blog = await Blog.findById(req.params.id);
    if(blog){
        blog.title = title;
        blog.Image = Image;
        blog.Content = Content;
        const updatedBlog = await blog.save();
        res.status(200)
        .json(updatedBlog)
    } else {
        res.status(404)
        .json({message: "Blog not found"})
    }
})


// @desc delete Blog By id 
// @access Private
// URL : http://localhost:3001/api/blog/delete/:id

const DeleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if(blog){
        await blog.delete();
        res.status(200)
        .json({message: "Blog removed succefully"})
    } else {
        res.status(404)
        .json({message: "Blog not found"})
    }
})

// @desc get Blog By id 
// @access Private
// URL : http://localhost:3001/api/blog/getById/:id

const GetBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if(blog){
        res.status(200)
        .json(blog)
    } else {
        res.status(404)
        .json({message: "Blog not found"})
    }
})


module.exports = {PostBlog , GetAllBlog , UpdateBlog , DeleteBlog , GetBlogById}