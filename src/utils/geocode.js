const request = require('request')

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJhdGVla2trMjYiLCJhIjoiY2tvc2NiaHR0MDA0NzMzbHM1NjFiOXl3MSJ9.jUyRrKxX4Ap2qMTbe4iF8A'
	request({url, json: true}, (error, {body}) => {
		if (error) {
			callback('Unable to connect to location services!', undefined)
		} else if (body.features.length === 0) {
			callback('Unable to find location. Try another search', undefined)
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			})
		}
	})

}

module.exports = geocode