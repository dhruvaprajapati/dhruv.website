const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      string: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoCodeURL)
  .then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find this address');
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/4da746d917052af729d5a3e5e359aadc/${lat},${lng}`


    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
  })
  .then((res) => {
    let temperature = res.data.currently.temperature;
    let apparentTemperature = res.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. Feels like ${apparentTemperature}`);
  })
  .catch((err) => {
    if(err.code === 'ENOTFOUND') {
      console.log('Unable to connect to API server');
    } else {
      console.log(err.message)
    }
  });
