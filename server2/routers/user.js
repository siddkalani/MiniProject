const express = require('express')
const router = new express.Router()

const User = require('../models/user')
const Booking = require('../models/booking')
const Package = require('../models/package')
const auth = require('../middleware/auth')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()

        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/user/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//to get the user profile using the auth token
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

//get all bookings of a particular user
router.get('/bookings/me', auth, async (req, res) => {
    try {
        const bookings = await Booking.find({ user_id: req.user._id });

        if (!bookings) {
            return res.status(404).send({ error: 'No bookings found for this user' });
        }

        res.status(200).send(bookings)
    }catch(e) {
        res.status(500).send({ error: 'Failed to fetch bookings' });
    }
})

router.get('/booking/me/:id', auth, async (req, res) => {
    const _id = req.params.id
    try{
        const booking = await Booking.findOne({ _id, user_id: req.user._id })
            .populate('packages');

        if (!booking) {
            return res.status(404).send({ error: 'No such booking under your account' });
        }

        res.status(200).send(booking);
    }catch(e) {
        res.status(500).send({ error: 'Failed to fetch bookings' });
    }
})

//update route
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' })

    try {
        const user = req.user
        updates.forEach((update) => user[update] = req.body[update])

        await user.save()
        //this bypasses the pre check function
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user._id)

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router