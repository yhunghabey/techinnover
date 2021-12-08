const express = require('express');
// const createDeliveryFee = require('../controller/delivery');
const deliveryController = require('../controller/delivery')
const router = express.Router();

// router
//   .route('/')
//   .get(getBootscamps)
//   .post(createBootscamp);


router.post('/deliveryprice', deliveryController.deliveryFee);

module.exports = router; 