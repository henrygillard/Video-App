const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: String,
    videoUrl: [String],
    
})

const groupSchema = new Schema({
    name: {type: String},
    years: [yearSchema],
    category: String,
    videoUrl: [String]
})

module.exports = mongoose.model('Group', groupSchema);