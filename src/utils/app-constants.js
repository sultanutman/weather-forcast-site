const chalk = require('chalk')

//Constants for Messaging
const successMsg = chalk.green.bold.italic;
const errorMsg = chalk.red.bold.italic;
const infoMsg = chalk.magenta.bold.italic;
const warningMsg = chalk.hex('#d5eb15').bold.italic;
//Constants for Weather API
const weatherKey = 'use-your-own';
const baseUrlWeather = 'http://api.weatherstack.com/';
const fahrenheitUnits = '&units=f';
const scientificUnits = '&units=s';
const frenchLang = '&language=fr';
const arabicLang = '&language=ar';
//Constants for GEO location API
const goeKey = 'use-your-own';
const baseUrlGeo = 'https://api.mapbox.com/'
const limitOption = '&limit=1'

module.exports = {
    weatherKey,
    goeKey,
    baseUrlWeather,
    baseUrlGeo,
    fahrenheitUnits,
    scientificUnits,
    arabicLang,
    frenchLang,
    successMsg,
    errorMsg,
    infoMsg,
    warningMsg,
    limitOption
};