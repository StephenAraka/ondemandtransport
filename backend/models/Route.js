const mongoose = require('mongoose');
const RouteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Route', RouteSchema);