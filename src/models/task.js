const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true
    },
    time: {
        type: Number,
        default: 0
    }
})

module.exports = Task