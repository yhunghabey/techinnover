const Delivery = require('../model/delivery');
const { ROUTE0, ROUTE1, ROUTE2, ROUTE3,
     ROUTE4, ROUTE5, ROUTE6, ROUTE7, 
     ROUTE8, ROUTE9, ROUTEXTREME, ROUTEPRICE } = require('../config');

 //getting the ROUTE index    
const getIndex = function (location){
    let response = 0;
    if (ROUTE0.includes(location)){
         response = 0;
    }else if(ROUTE1.includes(location)){
        response = 1;
    }else if(ROUTE2.includes(location)){
        response = 2;
    }else if(ROUTE3.includes(location)){
        response = 3;
    }else if(ROUTE4.includes(location)){
        response = 4;
    }else if(ROUTE5.includes(location)){
        response = 5;
    }else if(ROUTE6.includes(location)){
        response = 6;
    }else if(ROUTE7.includes(location)){
        response = 7;
    }else if(ROUTE8.includes(location)){
        response = 8;
    }else if(ROUTE9.includes(location)){
        response = 9;
    }

    return response;
}

exports.deliveryFee = async (deliveryObj) => {
    try {
        let deliveryFee = 0;
        const { pickupAddress, dropOffAddress, deliveryType } = deliveryObj;
        if(ROUTEXTREME.includes(dropOffAddress)){
            deliveryFee = 3000;
        }else {
            const dropOffResp = getIndex(dropOffAddress);
            const pickUpResp = getIndex(pickupAddress);  
            
            deliveryFee = ROUTEPRICE[pickUpResp][dropOffResp];
        }
        
        if(deliveryType === 'EXPRESS'){
            deliveryFee *= 2;
        }
    
      const response = {};
      response.data = deliveryFee;
      response.message = 'Delivery Fee Successfully Generated';
      response.success = true;
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  };