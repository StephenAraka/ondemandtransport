const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');

router.post('/request', async(req, res) => {
    const ride = new Ride({
        passenger: req.body.passenger,
        pickupTime: req.body.pickupTime,
        departureLocation: req.body.departureLocation,
        destinationLocation: req.body.destinationLocation,
        numberOfSits: req.body.numberOfSits,
        disabledPeople: req.body.disabledPeople,
    });
    try {
        await ride.save();
        res.status(200).send({ code: 200, message: 'Successfully requested ride.' });

    } catch (err) {
        res.status(400).send(err);
    }
})

// GET ALL RIDE REQUESTS
router.get('/', async(req, res) => {
    try {
        const rides = await Ride.find().populate('passenger');
        res.json(rides);

    } catch (err) {
        res.json({ message: err });
    }
});

// GET A SPECIFIC USER'S RIDES
router.get('/:userID', async(req, res) => {
    try {
        const rides = await Ride.find({ passenger: req.params.userID });
        res.json(rides);

    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;