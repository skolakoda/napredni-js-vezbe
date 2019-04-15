// 192.168.0.107:8080
const http = require('http')
const fs = require('fs')
const express = require('express')
const { getRandomName } = require('./helpers.js')

const app = express()

const sadrzaj = fs.readFileSync('imena.txt', 'utf8')
const imena = sadrzaj.split(", ")

app.get('/', function(req, res) {
	res.send('Dobrodosli na Random Name API.')
})

app.get('/sva-imena', (req, res) => res.send(sadrzaj))

app.get('/random', (req, res) => {
	res.send(getRandomName(imena))
})

app.listen(8080, function() {
	console.log('Server je krenuo.')
})
