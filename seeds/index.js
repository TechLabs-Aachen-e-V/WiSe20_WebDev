// DANGEROUS!!! Deletes everything in database!

const mongoose = require('mongoose');
const { events, descriptors } = require('./seedHelpers');
const Event = require('../models/event') //..to back out 

mongoose.connect('mongodb://localhost:27017/locals-aachen', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Event.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const day = Math.floor(Math.random() * 28);
        const month = Math.floor(Math.random() * 12);
        const event = new Event({
            location: 'Aachen',
            title: `${sample(descriptors)} ${sample(events)}`,
            date: `${day}.${month}.2021`,
            description: "Bla Bla Bla"
        })
        await event.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})