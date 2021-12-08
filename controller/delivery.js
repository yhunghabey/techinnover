const {ErrorResponse, requiredFieldValidator} = require('../utils/errorResponse');
const deliveryFeeService = require('../service/deliveryService');


// @desc       Create new endpoint
// @route.     POST /api/v1/deliveryfee
// @access     Private
// update supply
exports.deliveryFee = async (req, res) => {
  try {
    
    const {
      pickupAddress,
      dropOffAddress,
      deliveryType,
    } = req.body;
    await requiredFieldValidator(
      ['pickupAddress', 'dropOffAddress', 'deliveryType'],
      Object.keys(req.body),
    );
    const deliveryObj = {};

    deliveryObj.pickupAddress = pickupAddress;
    deliveryObj.dropOffAddress = dropOffAddress;
    deliveryObj.deliveryType = deliveryType;
  
    const responseData = await deliveryFeeService.deliveryFee(
      deliveryObj);
    return res.json(response.success(responseData.data, responseData.message));
  } catch (err) {
    const error = {};
    let message = '';
    err.data ? (error.data = err.data) : (error.data = {});
    err.name ? (error.name = err.name) : (error.name = 'UnknownError');
    err.message ? (message = err.message) : (message = 'Something Failed');
    return res.json(response.error(error, message));
  }
};