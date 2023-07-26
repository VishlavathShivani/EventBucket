const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({
    name: String,
    email:  String,
    phone: Number,
    branch: String,
    year: String,
    rollno: String
});

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 3
    },
    imageURL: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
      type: String,
      required: true
    },
    admin: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    //club field
    club: {
        type: String,
        required: true,
        enum: ['CSI', 'Crescendo', 'Livewire', 'Dramatrix', 'TEDxVNRVJIET', 'IEEE', 'Turing Hut', 'Krithomedh', 'Scintillate']
    },
    registeredUsers: {
        type: [subSchema],
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Event', EventSchema);