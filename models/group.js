const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: {type: Number, min: 1972, max: 2022},
    
})

const groupSchema = new Schema({
    name: {type: String},
    year: [yearSchema],
    category: String,
    videoUrl: [String]
})

module.exports = mongoose.model('Group', groupSchema);