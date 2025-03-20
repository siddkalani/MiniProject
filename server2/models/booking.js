const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    packages: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Package',
        required: true
    },
    status: {
        type: String,
        enum: ['confirmed', 'pending', 'cancelled'],
        required: true,
        default: 'confirmed'
    },
    booking_date: {
        type: Date,
        required: true,
        default: Date.now
    },
}, {
    timestamps: true
})

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking