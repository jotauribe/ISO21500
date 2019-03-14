const ActOfConstitution = require('../model/ActOfConstiution.model');
const phaseManagement = require('../models/model_specialties');
const { asyncHandler } = require('../utils');


const create = asyncHandler(async(req, res) => {
    let actConstitution = (req.body);
    phaseManagement.findOne({
        name: req.params.phaseManagement
    },(err, phase_management) => {
     actConstitution.phaseManagement = phase_management;
    //let actOfConstitution = new ActOfConstitution(req.body);
   await ActOfConstitution.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('actOfConstitution Created successfully')
    });
})
    

});

const getOne = asyncHandler(async (req, res) => {
    const actOfConstitutionId = req.params.id;
    const actOfConstitution = await ActOfConstitution.findById(actOfConstitutionId);
    res.send(actOfConstitution);
});

const getAll = asyncHandler(async (req, res) => {
    const actOfConstitution = await ActOfConstitution.find({});

    res.render(actOfConstitution);

});

const update = asyncHandler(async (req, res) => {

    const actOfConstitutionId = req.params.id;
    const actOfConstitution = await ActOfConstitution.findByIdAndUpdate(actOfConstitutionId, { $set: req.body }) ;

        res.send('actOfConstitution udpated.',actOfConstitution);
    });




const remove= asyncHandler(async (req, res) => {
    const actOfConstitutionId = req.params.id;
    const actOfConstitution = await  ActOfConstitution.findByIdAndRemove(actOfConstitutionId);

        res.send('Deleted successfully!');
    });





module.exports = { create, getOne, getAll, remove, update }
