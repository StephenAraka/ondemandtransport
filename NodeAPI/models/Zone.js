const mongoose = require('mongoose');
const ZoneSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    route: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Route',
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Route', ZoneSchema);