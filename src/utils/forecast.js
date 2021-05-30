const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=bd4f48e3de878fb4a4833187512d744b&query=" + latitude+ "," + longitude + "&units=f"
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude,
                longitude,
                location: body.location.name
            })
        }
    })

}

module.exports = forecast