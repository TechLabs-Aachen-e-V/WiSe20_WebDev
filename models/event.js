const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    description: String,
    category: String,
    date: String,
    location: String,
    file: Buffer,
    img_url: String
})

module.exports = mongoose.model('Event', EventSchema)