const Project = require('../model/projectModel');

const { asyncHandler } = require('../utils');
//routes
const test = (req, res) => {
    const { id } = req.params;
    const { active } = req.query;
    res.send({ message: id, active });
};

const createProject = (req, res) => {
    let params = req.body;

    params.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Project Created successfully')
    })

};

const getProject = asyncHandler(async (req, res) => {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    res.send(project);
});

const getProjects = (req, res) => {
   


};




const deleteProject = (req, res) =>{



};



module.exports = { test, createProject , getProjects ,getProject, deleteProject }
