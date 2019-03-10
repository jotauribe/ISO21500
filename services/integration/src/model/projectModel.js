const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
    nameProject: {
        type: String,
        required: [true, 'Why no a name project? obligatory field']
    },
    nameDirector: {
        type: String,
        required: [true, 'obligatory field']
    },
    department: {
        type: String,
        required: [true, 'obligatory field']
    }
});
let project = db.model('Project', projectSchema);

let badProject = new project();

let error = badProject.validateSync();
assert.equal(error.errors['nameProject'].message,
    'obligatory field');
assert.ok(!error.errors['nameDirector']);
assert.equal(error.errors['department'].message,
    'Empty field');

badProject.nameDirector = null;
badProject.department = null;

badProject.nameDirector = null;
error = badProject.validateSync();
assert.equal(error.errors['nameDirector'].message, 'required field');

error = badProject.validateSync();
assert.equal(error.errors['department'].message, 'Path `department` is required.');

module.exports = mongoose.model('Project' , projectSchema);

