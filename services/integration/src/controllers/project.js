const Project = require('../model/projectModel');

const { asyncHandler } = require('../utils');
//routes
const test = (req, res) => {
    const { id } = req.params;
    const { active } = req.query;
    res.send({ message: id, active });
};

const createProject = asyncHandler(async(req, res) => {
    let project = new Project(req.body);
    let params = req.body;

   await project.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Project Created successfully')
    })

});

const getProject = asyncHandler(async (req, res) => {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    res.send(project);
});

const getProjects = asyncHandler(async (req, res) => {
    const project = await Project.find({});

    res.render(project);

});

const updateProject = asyncHandler(async (req, res) => {

    const projectId = req.params.id;
    const project = await Project.findByIdAndUpdate(projectId, { $set: req.body }) ;
    //Project.findByIdAndUpdate(projectId, { $set: req.body }, function (err, project) {
        //if (err) return next(err);
        res.send('Project udpated.',project);
    });


//});


const deleteProject = asyncHandler(async (req, res) => {
    const projectId = req.params.id;
    const project = await  Project.findByIdAndRemove(projectId);
    //Project.findByIdAndRemove(projectId, function (err) {
        //if (err) return next(err);
        res.send('Deleted successfully!');
    });

//});



module.exports = { createProject, getProjects, getProject, deleteProject, updateProject }
