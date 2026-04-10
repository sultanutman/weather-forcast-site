const rqst = require('postman-request')
const appConstants = require('./app-constants');

const endpoint = 'mapbox.places';

const geocode = (address, callback) => {
    const geoUrl = appConstants.baseUrlGeo + `geocoding/v5/${endpoint}/${encodeURIComponent(address)}.json?access_token=${appConstants.goeKey}${appConstants.limitOption}`;
    rqst(
        {
            url: geoUrl,
            json: true
        },
        (error, response) => {
            if (error) {
                callback(error, undefined);

            } else if (
                !response.body ||
                response.body.features === 0 ||
                !response.body.features
            ) {
                callback('Response missing data', undefined);

            } else {
                const lat = response.body.features[0].center[1];
                const long = response.body.features[0].center[0];
                const place = response.body.features[0].place_name;
                callback(undefined, {
                    lat,
                    long,
                    place
                });
            }
        }
    );
};

module.exports = geocode;