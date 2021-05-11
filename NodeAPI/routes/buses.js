const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

router.post('/', async(req, res) => {
    const bus = new Bus({
        plateNumber: req.body.plateNumber,
        available: req.body.available,
        driver: req.body.driver,
        issuingDate: req.body.issuingDate,
    });
    try {
        await bus.save();
        res.status(200).send({ code: 200, message: 'Successfully created bus.' });

    } catch (err) {
        res.status(400).send(err);
    }
})

// GET ALL BUSES
router.get('/', async(req, res) => {
    try {
        const buses = await Bus.find().populate('driver');
        res.json(buses);

    } catch (err) {
        res.json({ message: err });
    }
});

// GET A SPECIFIC DRIVER'S BUSES
router.get('/:userID', async(req, res) => {
    try {
        const buses = await Bus.find({ driver: req.params.userID });
        res.json(buses);

    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;