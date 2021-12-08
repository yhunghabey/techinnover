const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    //log to console
    console.log(err.stack);

    //mongoose bad objectId
    if(err.name === 'CastError'){
        const message = `Bootcamp not found wth id of ${err.value}`;
        error = new ErrorResponse(message , 404);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })

}

module.exports = errorHandler;