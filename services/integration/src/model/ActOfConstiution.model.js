const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let actConstitutionSchema = new Schema({
    name: {
        type: String,
        required: [true, ' obligatory field']
    }
});


module.exports = mongoose.model('ActaConstitution' , actConstitutionSchema);
