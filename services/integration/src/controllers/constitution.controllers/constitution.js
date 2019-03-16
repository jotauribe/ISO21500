const ActOfConstitution = require('../model/constiution.model');

const { asyncHandler } = require('../utils');


const create = asyncHandler(async(req, res) => {
   
    let actOfConstitution = new ActOfConstitution(req.body);
   await ActOfConstitution.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('actOfConstitution Created successfully')
    });
});

const get = asyncHandler(async (req, res) => {
    const actOfConstitutionId = req.params.id;
    const actOfConstitution = await ActOfConstitution.findById(actOfConstitutionId);
    res.send(actOfConstitution);
});

const find = asyncHandler(async (req, res) => {
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


module.exports = { create, get, find, remove, update }