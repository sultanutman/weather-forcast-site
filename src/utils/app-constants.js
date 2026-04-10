const chalk = require('chalk');
const dotenv = require('dotenv');

dotenv.config()
//Constants for Messaging
const successMsg = chalk.green.bold.italic;
const errorMsg = chalk.red.bold.italic;
const infoMsg = chalk.magenta.bold.italic;
const warningMsg = chalk.hex('#d5eb15').bold.italic;

//Constants for Weather API
const weatherKey = process.env.WEATHER_KEY || 'use-your-own';
const baseUrlWeather = 'http://api.weatherstack.com/';
const fahrenheitUnits = '&units=f';
const scientificUnits = '&units=s';
const frenchLang = '&language=fr';
const arabicLang = '&language=ar';

//Constants for GEO location API
const goeKey = process.env.GEO_KEY || 'use-your-own';
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