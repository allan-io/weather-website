const request = require('postman-request')

const forecast = (longitude, latitude, location, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=878ab345f11f32f0255dd2f18fa61d8e&units=f&query=${latitude},${longitude}`

    request({ url, json: true }, (error, response, { current }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (error) {
            callback('Unable to find location, try another search.')
        } else {
            callback(undefined, {
                forecast: `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`,
                icon: current.weather_icons[0]
            })
        }
    })
}

module.exports = forecast

