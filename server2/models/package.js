const mongoose = require('mongoose')
const validator = require('validator')

const packageSchema = new mongoose.Schema({
    institution_provider_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution',
        required: false
    },
    tour_agency_provider_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agency',
        required: false
    },
    title: {
        type: String,
        required: true,
        trim: true,

    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    //medical OR tour OR combined
    type: {
        type: String,
        enum: ['medical', 'tour'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration_days: {
        type: Number,
        required: true
    },
    inclusions: {
        type: [String],
        required: true
    },
    availability: {
        slots_available: {
            type: Number,
            required: true
        }
    },
}, {
    timestamps: true
})

const Package = mongoose.model('Package', packageSchema)
module.exports = Package