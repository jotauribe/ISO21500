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


module.exports = mongoose.model('Project' , projectSchema);

