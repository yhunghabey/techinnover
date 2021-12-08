const mongoose = require('mongoose');

const deliveryFeeSchema = new mongoose.Schema({

    pickupAddress: {
        type: String,
        required: [true, 'Please add an address'],
    },
    dropOffAddress: {
        type: String,
        required: [true, 'Please add an address'],
    },
    deliveryType: {
        type: String,
        enum: ['EXPRESS', 'REGULAR']
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },

})

module.exports = mongoose.model('deliveryFee', deliveryFeeSchema);