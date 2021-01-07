const request = require('postman-request')


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWxsYW5kZXYxIiwiYSI6ImNraWVhZDJyNDFyYnMyem52MjBndDdwamMifQ.7DGNr6Zfnvuy-I3famylKQ&limit=1`

    request({ url, json: true }, (error, response, { features} ) => {

        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (features.length === 0) {
            callback('Unable to find location. Try another search')
        } else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}


module.exports = geocode