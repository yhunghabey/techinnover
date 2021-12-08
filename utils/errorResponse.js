class ErrorResponse extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    } 
}

exports.requiredFieldValidator = async (expectedFields, enteredFields, body, correlationID) => {
    // if no field was entered
    if (enteredFields.length === 0) {
      logger.debug(`${correlationID}: Required Fields Validation failed`);
      throw new MissingFieldError(expectedFields);
    }
    // check for expected fields
    expectedFields.forEach((field) => {
      if (!enteredFields.includes(field) || body[field] === '') {
        logger.debug(`${correlationID}: Required Fields Validation failed`);
        throw new MissingFieldError(expectedFields);
      }
    });
  
    return true;
  };
  

module.exports = ErrorResponse;