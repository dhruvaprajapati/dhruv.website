const request = require('request');


let geoCodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to google servers')
    } else if (body.status==='ZERO_RESULTS'){
      callback('Unable to find a location for a address')
    } else if(body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng,
      });
    }
  });
};

module.exports.geoCodeAddress = geoCodeAddress;

// API_KEY = '4da746d917052af729d5a3e5e359aadc';
// URL = `${API_KEY}${LAT}/${LNG}`;

// https://api.darksky.net/forecast/4da746d917052af729d5a3e5e359aadc/37.8267,-122.4233