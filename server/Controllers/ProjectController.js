const asyncHandler = require('express-async-handler');
const Project = require('../Models/ProjectSchema');

// @desc Post Single Project
// @access Private
// URL : http://localhost:3001/api/project/create

const PostProject = asyncHandler(async (req, res) => {
    const { title, Image, Content , link } = req.body;
    if ( !title || !Image || !Content || !link ){
        res.status(400)
        .json({message: "Please fill all the fields"})
    }
    // create project
    const project = await Project.create({
        title,
        Image,
        Content
    })
    if (project) {
        res.status(200)
        .json({message: "Project created successfully"})
    }else  {
        res.status(400)
        .json({message: "Project Not created"})
    }
})


// @desc Get all Projects
// @access Private
// URL : http://localhost:3001/api/project/getAll

const GetAllProject = asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    if(projects){
        res.status(200)
        .json(projects)
    } else {
        res.status(404)
        .json({message: "Projects not found"})
    }
})

// @desc update Project By id 
// @access Private
// URL : http://localhost:3001/api/project/update/:id

const UpdateProject = asyncHandler(async (req, res) => {
    const { title, Image, Content , link } = req.body;
    if ( !title || !Image || !Content || !link ){
        res.status(400)
        .json({message: "Please fill all the fields"})
    }
    const project = await Project.findById(req.params.id);
    if(project){
        project.title = title;
        project.Image = Image;
        project.Content = Content;
        project.link = link;
        const updatedProject = await project.save();
        res.status(200)
        .json({message: "Project updated successfully"})
    } else {
        res.status(404)
        .json({message: "Project not found"})
    }
})

// @desc delete Project By id 
// @access Private
// URL : http://localhost:3001/api/project/delete/:id

const DeleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if(project){
        await project.delete();
        res.status(200)
        .json({message: "Project deleted successfully"})
    } else {
        res.status(404)
        .json({message: "Project not found"})
    }
})

// @desc get Blog By id 
// @access Private
// URL : http://localhost:3001/api/project/getById/:id

const GetProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if(project){
        res.status(200)
        .json(project)
    } else {
        res.status(404)
        .json({message: "Project not found"})
    }
})

module.exports = {PostProject , GetAllProject , UpdateProject , DeleteProject , GetProjectById}