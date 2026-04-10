const rqst = require('postman-request')
const appConstants = require('./app-constants');


const forcastWeather = (lat, long, callback) => {
    const weatherUrl = appConstants.baseUrlWeather + `current?access_key=${appConstants.weatherKey}&query=${lat},${long}`;
    rqst(
        {
            url: weatherUrl,
            json: true
        },
        (error, response) => {
            if (error) {
                callback(error, undefined);

            } else if (response.body.error) {
                callback(response.body.error.type + ' - ' + response.body.error.info, undefined);
            } else if (
                !response.body ||
                !response.body.current ||
                response.body.current.weather_descriptions === 0
            ) {
                callback('Response missing data, incompatable request provided', undefined);

            } else {
                const description = response.body.current.weather_descriptions[0];
                const temperature = response.body.current.temperature;
                const feelsLike = response.body.current.feelslike;

                callback(undefined, {
                    description,
                    temperature,
                    feelsLike
                });

            }
        }
    );
};

module.exports = forcastWeather;