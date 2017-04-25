const yargs = require('yargs');
const weather = require('./weather/weather');
const geocode = require('./geocode/geocode');


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


geocode.geoCodeAddress(argv.address, (errorMessage, result) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(result.address);
    weather.getWeather(result.latitude, result.longitude, (errorMessage, weatherResult) => {
      if(errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}.`)
      }
    });
  }
});

