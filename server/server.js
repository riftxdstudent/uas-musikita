const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
	const refreshToken = req.body.refreshToken
	console.log('hi');
	const spotifyApi = new spotifyWebApi({
		redirectUri: 'http://localhost:3000',
		clientId: '3a3cb05494594984800ca14d25ebe2a2',
		clientSecret: '53a24d3b045e4dd7a4eb6010f343a517',
		refreshToken
	})

	spotifyApi
	.refreshAccessToken()
	.then(
		data => {
			res.json({
				accessToken: data.body.accessToken,
				expiresIn: data.body.expiresIn,
			})
		}).catch((err) => {
			console.log(err);
			res.sendStatus(400)
		}
	)
})

app.post('/login', (req, res) => {
	const code = req.body.code
	const spotifyApi = new spotifyWebApi({
		redirectUri: 'http://localhost:3000',
		clientId: '3a3cb05494594984800ca14d25ebe2a2',
		clientSecret: '53a24d3b045e4dd7a4eb6010f343a517'
	})

	spotifyApi
	.authorizationCodeGrant(code)
	.then(data => {
		res.json({
			accessToken: data.body.access_token,
			refreshToken: data.body.refresh_token,
			expiresIn: data.body.expires_in,
		})
	})
	.catch(err => {
		console.log(err);
		res.sendStatus(400)
	})
})

app.listen(3001)