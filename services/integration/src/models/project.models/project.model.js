const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
    nameProject: {
        type: String,
        required: [true, 'Project obligatory field']
    },
    nameDirector: {
        type: String,
        required: [true, 'name  director obligatory field']
    }
});


module.exports = mongoose.model('Project' , projectSchema);

