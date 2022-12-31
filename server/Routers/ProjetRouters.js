const express = require('express');
const router = express.Router();
const {PostProject , GetAllProject , UpdateProject , DeleteProject , GetProjectById} = require('../Controllers/ProjectController');

router.post('/create', PostProject);
router.get('/getAll', GetAllProject);
router.put('/update/:id', UpdateProject);
router.delete('/delete/:id', DeleteProject);
router.get('/getById/:id', GetProjectById);


module.exports = router