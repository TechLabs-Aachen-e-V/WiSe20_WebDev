const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    description: String,
    category: String,
    date: String,
    location: String,
    file: Buffer
})

module.exports = mongoose.model('Event', EventSchema)