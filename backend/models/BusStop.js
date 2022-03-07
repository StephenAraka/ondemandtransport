const mongoose = require('mongoose');
const BusStopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone',
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('BusStop', BusStopSchema);