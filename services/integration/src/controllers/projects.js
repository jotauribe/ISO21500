const Project = require('../models/project.model');
const PreviousInfo = require('../models/integration/constitution/previousInfo.model');
const Planning = require('../models/integration/planning.model');
const ConfigOne = require('../models/integration/configOne.model');
const ConfigTwo = require('../models/integration/configTwo.model');
const Changes = require('../models/integration/changes.model');
const Risks = require('../models/integration/risk.model');
const Lessons = require('../models/integration/learnedLessons.model');
const Teams = require('../models/resources/teams.model');
const Members = require('../models/resources/teamMembers.model');
const TeamManagement = require('../models/resources/teamManagement.model');
const Activities = require('../models/resources/activities.model');
const Resources = require('../models/resources/resource.model');
const Providers = require('../models/acquisitions/providers.model');
const Acquisitions = require('../models/acquisitions/acquisitions.model');

const Controller = require('./controller');
const { asyncHandler } = require('../utils');

const create = asyncHandler(async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  const previousInfo = new PreviousInfo({ projectId: project._id });
  new Planning({ projectId: project._id }).save();
  new ConfigOne({ projectId: project._id }).save();
  new ConfigTwo({ projectId: project._id }).save();
  new Changes({ projectId: project._id }).save();
  new Risks({ projectId: project._id }).save();
  new Lessons({ projectId: project._id }).save();
  new Teams({ projectId: project._id }).save();
  new Members({ projectId: project._id }).save();
  new TeamManagement({ projectId: project._id }).save();
  new Activities({ projectId: project._id }).save();
  new Resources({ projectId: project._id }).save();
  new Providers({ projectId: project._id }).save();
  new Acquisitions({ projectId: project._id }).save();

  await previousInfo.save();

  res.send({ message: 'Project Created successfully', document: project });
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
