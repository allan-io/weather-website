const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// define paths for expree configs
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars views and location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// set up static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Allan Oliveira'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: "Allan Oliveira"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'For any additional information please feel free to contact me.',
        name: 'Allan Oliveira'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please provide a address'
        })
    }

    geocode(req.query.address, (error, { longitude, latitude, location } = {} ) => {
        if (error) {
            return res.send({ error })
        }
        forecast(longitude, latitude, location, (error, data) => {
            if (error) {
                return res.send({
                    error
                })
            }

            res.send({
                forecast: data,
                location,
                address: req.query.address
            })
        })
    })

    // res.send({
    //     forecast: "good Lord its a typhoon",
    //     locatioin: "Bermuda",
    //     address: req.query.address
    // })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        error: 'Help article not found',
        name: 'Allan Oliveira',
        title: '404'
    })
})

// wildcard route, every route that has not been created above
app.get('*', (req, res) => {
    res.render('404', {
        error: 'Page not found',
        name: 'Allan Oliveira',
        title: '404'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})