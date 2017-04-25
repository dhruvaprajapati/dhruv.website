const request = require('request');


let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/4da746d917052af729d5a3e5e359aadc/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: Math.floor((body.currently.temperature -32)*5/9)+ ' deg celcius',
        apparentTemperature: Math.floor((body.currently.apparentTemperature -32)*5/9)+ ' deg celcius'
      });
      console.log();
    } else{
      callback('Unable to fetch weather details');
    }
  });

};

module.exports.getWeather = getWeather;


