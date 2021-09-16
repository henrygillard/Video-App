const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: [Number],
    group: {type: String},
    category: { type: Schema.Types.ObjectId, ref: "Category"},
})

module.exports = mongoose.model('Year', yearSchema);