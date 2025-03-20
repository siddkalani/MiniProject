const express = require('express')
const router = new express.Router()

const Booking = require('../models/booking')
const User = require('../models/user')
const auth = require('../middleware/auth')

router.post('/booking/new', auth, async (req, res) => {
    try {
        const booking = new Booking({
            ...req.body,
            user_id: req.user._id
        });
        const user = await User.findById(req.user._id)

        user.bookings.push(booking._id)
        await user.save()
        await booking.save()

        res.status(201).send({ booking })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router