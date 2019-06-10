const Project = require('../models/project.model');
const PreviousInfo = require('../models/constitution/previousInfo.model');

const Controller = require('./controller');
const { asyncHandler } = require('../utils');

const create = asyncHandler(async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  const previousInfo = new PreviousInfo({ projectId: project._id });
  await previousInfo.save();

  res.send({ message: 'Project Created successfully' });
});

const get = asyncHandler(async (req, res) => {
  const projectId = req.params.id;

  const project = await Project.findById(projectId);

  res.send(project);
});

const find = asyncHandler(async (req, res) => {
  const project = await Project.find({});

  res.send(project);
});

const update = asyncHandler(async (req, res) => {
  const projectId = req.params.id;

  const project = await Project.findByIdAndUpdate(projectId, {
    $set: req.body
  });

  res.send('Project udpated.', project);
});

const remove = asyncHandler(async (req, res) => {
  const projectId = req.params.id;

  await Project.findByIdAndRemove(projectId);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = new Controller(
  { create, get, find, remove, update },
  '/projects'
);
