const path = require('path')
const express = require('express')
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forcastWeather = require('./utils/forcast');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsDirPath = path.join(__dirname, "../templates/views");
const partialsDirPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsDirPath)
hbs.registerPartials(partialsDirPath)

//Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sultan'
    })
});

//app.com/help
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page!',
        imgg: 'me.png',
        about: 'This site was created by Sultan. It uses data from mapbox.com & weatherstack.com'
    });
});

//app.com/about
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        info: 'Contact help@app.com for assistance',
        name: 'Sultan'
    });
});

//app.com/weather
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send(
            {
                error: 'You must specify an address!'
            }
        );
    }
    geocode(req.query.address, (error, { lat, long, place } = {}) => {
        if (error) {
            return res.send({ error });
        }


        forcastWeather(lat, long, (error, { description, temperature, feelsLike } = {}) => {
            if (error) {
                return res.send({ error });
            }

            const location = place;
            const feelslike = feelsLike ? feelsLike : temperature;
            res.send({
                location,
                description,
                temperature,
                feelslike,
                display: `Weather is ${description}, temperature is ${temperature} but feels like ${feelslike}`
            });
        });

    });
});

app.get('/help/*splat', (req, res) => {
    res.render('404', {
        title: '404',
        info: 'Help article not found',
        name: 'Sultan'
    });
});

app.get('*splat', (req, res) => {
    res.render('404', {
        title: '404',
        info: 'Page not found',
        name: 'Sultan'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});