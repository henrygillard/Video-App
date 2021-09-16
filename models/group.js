const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: {type: Number, min: 1972, max: 2022},
    videoUrl: {type: String},
})

const groupSchema = new Schema({
    name: {type: String},
    year: [yearSchema],
    category: { type: Schema.Types.ObjectId, ref: "Category"},
})

module.exports = mongoose.model('Group', groupSchema);