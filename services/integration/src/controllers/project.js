const Project = require('../model/project.model');

const { asyncHandler } = require('../utils');


const create = asyncHandler(async(req, res) => {
    let project = new Project(req.body);
   await project.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Project Created successfully')
    })

});

const get = asyncHandler(async (req, res) => {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    res.send(project);
});

const find = asyncHandler(async (req, res) => {
    const project = await Project.find({});

    res.render(project);

});

const update = asyncHandler(async (req, res) => {

    const projectId = req.params.id;
    const project = await Project.findByIdAndUpdate(projectId, { $set: req.body }) ;
        res.send('Project udpated.',project);
    });




const remove= asyncHandler(async (req, res) => {
    const projectId = req.params.id;
    const project = await  Project.findByIdAndRemove(projectId);

        res.send('Deleted successfully!');
    });





module.exports = { create, get, find, remove, update }
