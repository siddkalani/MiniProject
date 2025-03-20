const express = require('express')
const router = new express.Router()

const Package = require('../models/package')

router.post('/packages/new', async (req, res) => {
    const package = new Package(req.body)

    try {
        await package.save()

        res.status(201).send({ package })
    } catch (e) {
        res.status(400).send(e)
    }
})

// GET /packages?type=medical
// GET /packages?limit=10&skip=0
// GET /packages?sortBy=createdAt:desc
router.get('/packages', async (req, res) => {
    try {
        const filters = {}
        const sort = {}

        if (req.query.type) {
            filters.type = req.query.type;
        }

        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(":")
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
        }

        const limit = parseInt(req.query.limit) || 10;
        const skip = parseInt(req.query.skip) || 0;

        const packages = await Package.find(filters)
            .limit(limit)
            .skip(skip)
            .sort(sort);

        res.send(packages);
    } catch (e) {
        res.status(500).send()
    }
})

//update route
router.patch('/packages/update/:id', async (req, res) => {
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

router.delete('/packages/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user._id)

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router