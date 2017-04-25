const request = require('request');

let geoCodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true,
    }, (error, response, body) => {
      if(error) {
        reject('Unable to connect to google servers')
      } else if (body.status==='ZERO_RESULTS'){
        reject('Unable to find a location for a address')
      } else if(body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        });
      }
    });
  });
};

geoCodeAddress('Anant Enclave, Kharghar')
.then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
})
.catch((err) => console.log(err, undefined, 2));




module.exports.geoCodeAddress = geoCodeAddress;

// API_KEY = '4da746d917052af729d5a3e5e359aadc';
// URL = `${API_KEY}${LAT}/${LNG}`;

// https://api.darksky.net/forecast/4da746d917052af729d5a3e5e359aadc/37.8267,-122.4233