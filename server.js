const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Event = require('./models/event')
const { resolve } = require('dns');

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

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use('/public', express.static('public'));


//show everything
app.get('/events', async (req, res) => {
    const events = await Event.find({})
    res.render('events/index', { events })
});

//open event creator
app.get('/events/new', (req, res) => {
    res.render('events/new')
});

//create event
app.post('/events', async (req, res) => {
    const event = new Event(req.body.event);
    await event.save();
    res.redirect(`/events/${event._id}`)
});

//show single event
app.get('/events/:id', async (req, res) => {
    const event = await Event.findById(req.params.id)
    res.render('events/show', { event });
});

//open event editor
app.get('/events/:id/edit', async (req, res) => {
    const event = await Event.findById(req.params.id)
    res.render('events/edit', { event });
});

//update event
app.put('/events/:id', async (req, res) => {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, { ...req.body.event });
    res.redirect(`/events/${event._id}`)
});

//delete event
app.delete('/events/:id', async (req, res) => {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.redirect('/events')
})

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})